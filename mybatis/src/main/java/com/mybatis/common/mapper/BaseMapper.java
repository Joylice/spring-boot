package com.mybatis.common.mapper;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;


/**
 * Created by cuiyy on 2017/6/22.
 */
//该接口不能被扫描到，否则会报错
public interface BaseMapper<T> extends Mapper<T>, MySqlMapper<T> {

}
