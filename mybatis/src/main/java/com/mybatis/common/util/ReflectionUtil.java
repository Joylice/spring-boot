package com.mybatis.common.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * Created by cuiyy on 2017/6/30.
 */
public class ReflectionUtil {
    private static final Logger logger = LoggerFactory.getLogger(ReflectionUtil.class);

    /**
     * 通过反射，获得定义Class时声明的父类的泛型参数的类型，如无法找到，返回Object.class
     *
     * @param clazz
     * @param index
     * @return
     */
    public static Class<Object> getSuperClassGenericType(final Class clazz, final int index) throws Exception {
        //返回表示此class所表示的实体（类、接口、基本类型、void）的直接超类的Type
        Type genType = clazz.getGenericSuperclass();
        if (!(genType instanceof ParameterizedType)) {
            throw new Exception("获取泛型类型失败");
        }
        //返回表示此类型实际类型参数的Type对象的数组
        Type[] params = ((ParameterizedType) genType).getActualTypeArguments();

        if (index >= params.length || index < 0) {
            throw new Exception("获取泛型类型失败");
        }
        if (!(params[index] instanceof Class)) {
            throw new Exception("获取泛型类型失败");
        }
        return (Class) params[index];
    }
}
