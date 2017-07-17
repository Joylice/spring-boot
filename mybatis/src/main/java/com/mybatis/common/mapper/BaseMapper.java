package com.mybatis.common.mapper;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/22.
 */
//该接口不能被扫描到，否则会报错
public interface BaseMapper<T> {
    int deleteByPrimaryKey(String id);

    int insert(T record);

    T selectByPrimaryKey(String id);

    List<T> selectAll();

    int updateByPrimaryKey(T record);
}
