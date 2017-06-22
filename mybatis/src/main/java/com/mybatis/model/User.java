package com.mybatis.model;

import com.mybatis.common.util.ApplicationUtil;
import com.mybatis.dao.mapper.UserAuthorityMapper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * Created by cuiyy on 2017/6/9.
 */
@JsonIgnoreProperties(value = "authorities", allowGetters = true)
public class User implements UserDetails {
    private Integer id;
    private String username;
    private String password;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    @Override
    @JsonIgnoreProperties(ignoreUnknown = true, allowGetters = true)
    public Collection getAuthorities() {
        Collection<Authority> authorities = ApplicationUtil.getBean(UserAuthorityMapper.class).findByUserId(id);
        return authorities;
    }

    @Override
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    //以下几个方法，必须为TRUE,用户验证通过，可跟踪源码，获知在条件验证前，会check这几项是否为True
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
