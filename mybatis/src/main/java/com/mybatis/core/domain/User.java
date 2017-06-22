package com.mybatis.core.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mybatis.common.domain.BaseDomain;
import com.mybatis.common.util.ApplicationUtil;
import com.mybatis.core.mapper.UserAuthorityMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@JsonIgnoreProperties(value = "authorities", allowGetters = true)
public class User extends BaseDomain implements UserDetails {
    private String id;
    private Long version;
    private Boolean deleteFlag;
    private Boolean validFlag;
    private Long sort;

    public String getId() {
        return id;
    }

    public Long getVersion() {
        return version;
    }

    public Boolean getDeleteFlag() {
        return deleteFlag;
    }

    public Boolean getValidFlag() {
        return validFlag;
    }

    public Long getSort() {
        return sort;
    }


    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public void setDeleteFlag(Boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public void setValidFlag(Boolean validFlag) {
        this.validFlag = validFlag;
    }

    public void setSort(Long sort) {
        this.sort = sort;
    }




    private String username;
    private String password;
    private Boolean accountNonExpired;
    private Boolean accountNonLocked;
    private Boolean credentialsNonExpired;
    private Boolean enabled;

    @Override
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    @Override
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }


    @Override
    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<Authority> authorities = ApplicationUtil.getBean(UserAuthorityMapper.class).findByUserId(id);
        return authorities;
    }

}