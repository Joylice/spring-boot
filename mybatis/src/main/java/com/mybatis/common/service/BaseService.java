package com.mybatis.common.service;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/22.
 */
public interface BaseService<T> {
    Integer add(T t);

    Integer delete(String id);

    Integer update(T t);

    T selectById(String id);

    T selectByName(String name);

    List<T> selectAll();

}
