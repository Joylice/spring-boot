package com.mybatis.common.util;

import com.mybatis.common.domain.BaseDomain;
import com.mybatis.common.mapper.BaseMapper;
import com.mybatis.common.service.BaseService;
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

    /**
     * 根据domain类获取对应的Service Bean，如没获取到，则动态注册一个名为domainService的bean
     *
     * @param <T>
     * @param clazz
     * @return
     */
    public static <T extends BaseDomain> BaseService<T> getServiceBean(Class<? extends T> clazz) {

        BaseService<T> baseService = null;
        String beanName = getServiceName((Class<? extends BaseDomain>) clazz);
        try {
            baseService = (BaseService) ApplicationUtil.getBean(beanName);
            log.debug("getServiceBean," + baseService.toString());
        } catch (NoSuchBeanDefinitionException exception) {

            log.debug("register Service, " + exception.getBeanName());
            String className = getMapperNameFromGenPackage((Class<? extends BaseDomain>) clazz);

            Class<? extends BaseMapper> mapperClass = null;
            try {
                mapperClass = (Class<? extends BaseMapper>) applicationContext.getClassLoader().loadClass(className);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
                log.debug("ClassNotFoundException: " + mapperClass);
            }

            if (mapperClass != null) {
                if (!sqlSessionFactory.getConfiguration().hasMapper(mapperClass)) {
                    sqlSessionFactory.getConfiguration().addMapper(mapperClass);
                }
                HashMap<String, Object> properties = new HashMap<>();
                properties.put("baseMapper", sqlSessionTemplate.getMapper(mapperClass));
                baseService = registerBean(exception.getBeanName(), BaseService.class, properties, false);
            }

        }
        return baseService;
    }


    /**
     * 根据domain类获取对应的Mapper Bean，如没获取到，则动态注册一个名为domainMapper的bean
     *
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> BaseMapper<T> getMapperBean(Class<? extends T> clazz) {
        BaseMapper baseMapper = null;
        String beanName = getMapperName((Class<? extends BaseDomain>) clazz);
        try {
            baseMapper = (BaseMapper) ApplicationUtil.getBean(beanName);
            log.debug("getMapperBean," + baseMapper.toString());

        } catch (NoSuchBeanDefinitionException exception) {
            String className = getMapperNameFromGenPackage((Class<? extends BaseDomain>) clazz);

            Class<? extends BaseMapper> mapperClass = null;
            try {
                mapperClass = (Class<? extends BaseMapper>) applicationContext.getClassLoader().loadClass(className);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
                log.debug("ClassNotFoundException: " + mapperClass);
            }
            if (mapperClass != null) {
                if (!sqlSessionFactory.getConfiguration().hasMapper(mapperClass)) {
                    sqlSessionFactory.getConfiguration().addMapper(mapperClass);
                }
                baseMapper = sqlSessionTemplate.getMapper(mapperClass);
            }
        }

        return baseMapper;
    }


    /**
     * @param clazz
     * @return
     */
    private static String getServiceName(Class<? extends BaseDomain> clazz) {
        String serviceName = clazz.getSimpleName() + "Service";
        char[] tempCharArray = serviceName.toCharArray();
        tempCharArray[0] = new String(new char[]{tempCharArray[0]}).toLowerCase().toCharArray()[0];
        return new String(tempCharArray);
    }

    private static String getMapperName(Class<? extends BaseDomain> clazz) {
        String serviceName = clazz.getSimpleName() + "Mapper";
        char[] tempCharArray = serviceName.toCharArray();
        tempCharArray[0] = new String(new char[]{tempCharArray[0]}).toLowerCase().toCharArray()[0];
        return new String(tempCharArray);
    }

    /**
     * 根据Domain获取com.bms.gen目录下mybatis generator生成的Mapper接口类名
     * <p>
     * com.bms.core.mapper.Domain > com.bms.gen.core.mapper.DomainMapper
     *
     * @param clazz
     * @return
     */
    private static String getMapperNameFromGenPackage(Class<? extends BaseDomain> clazz) {
        return new StringBuffer("com.bms.gen.").append(clazz.getPackage().getName().substring(8, clazz.getPackage().getName().lastIndexOf("."))).append(".mapper.").append(clazz.getSimpleName()).append("Mapper").toString();
    }
}