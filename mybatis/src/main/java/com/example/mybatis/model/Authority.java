package com.example.mybatis.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * Created by cuiyy on 2017/6/9.
 */
public class Authority implements GrantedAuthority {
    private Integer id;
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return id.toString();
    }
}
