package com.mybatis.core.service;

import com.mybatis.common.service.BaseService;
import com.mybatis.core.domain.Authority;
import com.mybatis.core.mapper.AuthorityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cuiyy on 2017/6/30.
 */
@Service
public class AuthorityService extends BaseService<Authority> {
    @Autowired
    AuthorityMapper authorityMapper;

    public List<String> getAuthorities_String_ByMenuId(String menuId) {
        List<String> _authorities = new ArrayList<>();
        getAuthorities_Obj_ByMenuId(menuId).forEach(authority -> _authorities.add(authority.getAuthority()));
        return _authorities;
    }

    public List<Authority> getAuthorities_Obj_ByMenuId(String menuId) {
        return authorityMapper.getAuthoritiesByMenuId(menuId);
    }
}
