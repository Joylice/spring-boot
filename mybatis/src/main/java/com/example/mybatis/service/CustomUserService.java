package com.example.mybatis.service;

import com.example.mybatis.dao.mapper.UserMapper;
import com.example.mybatis.model.Role;
import com.example.mybatis.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cuiyy on 2017/6/12.
 */
@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userMapper.getUserDetail(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户不存在！");
        }
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        //用于添加用户的权限，只要把用户权限添加到authorities
        for (Role r : user.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(r.getName()));
            System.out.println(r.getName());
        }
        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPwd(), authorities);
    }
}
