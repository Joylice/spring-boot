package com.mybatis.common.mapper;

/**
 * Created by cuiyy on 2017/6/22.
 */
public interface BaseMapper<T> {
    int insert(T t);
}
