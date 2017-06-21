package com.example.mybatis.common;


import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import java.util.HashMap;

/**
 * Created by jp on 2016/7/17.
 * 工具类：使用该工具类可以在普通java类中通过name或class获取被Spring容器管理的Bean对象
 */
@Component
public class ApplicationUtil implements ApplicationContextAware {

    private static final Logger log = LoggerFactory.getLogger(ApplicationUtil.class);

    private static ApplicationContext applicationContext;
    private static SqlSessionFactory sqlSessionFactory;
    private static SqlSessionTemplate sqlSessionTemplate;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (ApplicationUtil.applicationContext == null) {
            ApplicationUtil.applicationContext = applicationContext;
            ApplicationUtil.sqlSessionFactory = (SqlSessionFactory) applicationContext.getBean("sqlSessionFactory");
            ApplicationUtil.sqlSessionTemplate = (SqlSessionTemplate) applicationContext.getBean("sqlSessionTemplate");
        }
    }

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    /**
     * 通过name获取Bean
     *
     * @param name
     * @return
     */
    public static Object getBean(String name) {
        return getApplicationContext().getBean(name);
    }

    /**
     * 通过class获取Bean
     *
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T getBean(Class<T> clazz) {
        return getApplicationContext().getBean(clazz);
    }

    /**
     * 通过name和class获取Bean
     *
     * @param name
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T getBean(String name, Class<T> clazz) {
        return getApplicationContext().getBean(name, clazz);
    }

    /**
     * 动态注册bean
     *
     * @param beanName
     * @param clazz
     * @param reRegister，当bean已经存在时，是否销毁已经存在的bean重新注册
     * @param <T>
     * @return
     */
    public static <T> T registerBean(String beanName, Class<T> clazz, HashMap<String, Object> properties, boolean reRegister) {
        T bean = null;
        ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext) applicationContext;
        DefaultListableBeanFactory defaultListableBeanFactory = (DefaultListableBeanFactory) configurableApplicationContext.getBeanFactory();
        try {
            bean = getBean(beanName, clazz);
        } catch (NoSuchBeanDefinitionException ignored) {
        }
        if (bean != null) {
            if (reRegister) {
                defaultListableBeanFactory.removeBeanDefinition(beanName);
                bean = null;
            }
        } else {
            BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(clazz);
            for (String propertyName : properties.keySet()) {
                beanDefinitionBuilder.addPropertyValue(propertyName, properties.get(propertyName));
            }
            defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinitionBuilder.getRawBeanDefinition());
            return getBean(beanName, clazz);
        }
        return bean;
    }

    /**
     * 动态注册bean
     *
     * @param beanName
     * @param instance
     * @param reRegister，当bean已经存在时，是否销毁已经存在的bean重新注册
     * @param <T>
     * @return
     */
    public static <T> T registerSingletonBean(String beanName, T instance, boolean reRegister) {
        T bean = null;
        ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext) applicationContext;
        DefaultListableBeanFactory defaultListableBeanFactory = (DefaultListableBeanFactory) configurableApplicationContext.getBeanFactory();
        try {
            bean = (T) getBean(beanName);
        } catch (NoSuchBeanDefinitionException ignored) {
        }
        if (bean != null) {
            if (reRegister) {
                defaultListableBeanFactory.removeBeanDefinition(beanName);
                bean = null;
            }
        } else {
            defaultListableBeanFactory.registerSingleton(beanName, instance);
            bean = (T) getBean(beanName);
        }
        return bean;
    }
}