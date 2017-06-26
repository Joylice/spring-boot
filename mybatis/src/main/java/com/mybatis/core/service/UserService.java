package com.mybatis.core.service;

import com.mybatis.core.domain.User;
import com.mybatis.core.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/22.
 */
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public List<User> getUserDetail() {
        return userMapper.select(null);
    }
}
