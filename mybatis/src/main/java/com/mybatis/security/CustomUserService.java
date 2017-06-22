package com.mybatis.security;

import com.mybatis.dao.mapper.UserMapper;
import com.mybatis.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * Created by cuiyy on 2017/6/12.
 */
@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) {
        if (StringUtils.isEmpty(username)) {
            throw new UsernameNotFoundException("用户名为空");
        }
        User user = userMapper.getUserDetail(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户不存在！");
        }
        return user;
    }
}
