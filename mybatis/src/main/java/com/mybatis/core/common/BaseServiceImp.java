package com.mybatis.core.common;

import com.mybatis.common.domain.BaseDomain;
import com.mybatis.common.service.BaseService;
import com.mybatis.core.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/22.
 */
public abstract class BaseServiceImp<T extends BaseDomain> implements BaseService<T> {

    @Autowired
    UserMapper userMapper;
    @Override
    public Integer add(T o) {
        return userMapper.insert(o);
    }

    @Override
    public Integer delete(String id) {
        return null;
    }

    @Override
    public Integer update(T o) {
        return null;
    }

    @Override
    public T selectById(String id) {
        return null;
    }

    @Override
    public T selectByName(String name){
        return (T)userMapper.getUserDetail(name);
    }
    @Override
    public List selectAll() {
        return null;
    }

}
