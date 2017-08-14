package com.mybatis.conf;

import com.mybatis.core.domain.RequestMap;
import com.mybatis.core.mapper.RequestMapMapper;
import com.mybatis.security.CustomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by cuiyy on 2017/6/15.
 */
@Configuration
@EnableWebSecurity//禁用Boot的默认Security配置
@EnableGlobalMethodSecurity(prePostEnabled = true)//启用Security注解
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    RequestMapMapper requestMapMapper;

    @Bean
    UserDetailsService customUserService() {
        return new CustomUserService();
    }

    /**
     * 身份验证配置，用于注入自定义身份验证Bean和密码校验规则
     *
     * @param auth
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserService());
    }

    /**
     * Web层面的配置，一般用来配置无需安全检查的路径
     *
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/static/**");
    }

    /**
     * Request层面的配置，对应XML Configuration中的<http>元素
     *
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry urlRegistry = http.authorizeRequests();
        for (RequestMap requestMap : requestMapMapper.selectAll()) {
            if (requestMap.getAuthority().contains("permitAll")) {
                urlRegistry.antMatchers(requestMap.getUrl()).permitAll();
            } else {
                urlRegistry.antMatchers(requestMap.getUrl()).hasRole(requestMap.getAuthority());
            }
        }
        urlRegistry.anyRequest().authenticated();
        http.csrf().disable();
        // http.exceptionHandling().authenticationEntryPoint(authEntryPoint);
        http.headers().frameOptions().sameOrigin();
        http.formLogin()
                .loginProcessingUrl("/signin")
                .loginPage("/index.html")
                .usernameParameter("username")
                .passwordParameter("password");
        // .successHandler(authSuccessHandler)
        // .failureHandler(authFailureHandler);

        http.logout()
                .logoutUrl("/signout")
                .deleteCookies("remember-me")
                .logoutSuccessUrl("/index.html");
        http.rememberMe();
    }
}
