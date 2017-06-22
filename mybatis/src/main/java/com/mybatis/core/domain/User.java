package com.mybatis.core.domain;

import com.mybatis.common.domain.BaseDomain;

public class User extends BaseDomain {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.version
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Long version;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.delete_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean deleteFlag;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.valid_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean validFlag;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.sort
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Long sort;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.username
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private String username;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.password
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.account_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean accountNonExpired;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.account_non_locked
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean accountNonLocked;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.credentials_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean credentialsNonExpired;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.enabled
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private Boolean enabled;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.id
     *
     * @return the value of user.id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.id
     *
     * @param id the value for user.id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.version
     *
     * @return the value of user.version
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Long getVersion() {
        return version;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.version
     *
     * @param version the value for user.version
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setVersion(Long version) {
        this.version = version;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.delete_flag
     *
     * @return the value of user.delete_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getDeleteFlag() {
        return deleteFlag;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.delete_flag
     *
     * @param deleteFlag the value for user.delete_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setDeleteFlag(Boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.valid_flag
     *
     * @return the value of user.valid_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getValidFlag() {
        return validFlag;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.valid_flag
     *
     * @param validFlag the value for user.valid_flag
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setValidFlag(Boolean validFlag) {
        this.validFlag = validFlag;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.sort
     *
     * @return the value of user.sort
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Long getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.sort
     *
     * @param sort the value for user.sort
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setSort(Long sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.username
     *
     * @return the value of user.username
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.username
     *
     * @param username the value for user.username
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.password
     *
     * @return the value of user.password
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.password
     *
     * @param password the value for user.password
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.account_non_expired
     *
     * @return the value of user.account_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getAccountNonExpired() {
        return accountNonExpired;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.account_non_expired
     *
     * @param accountNonExpired the value for user.account_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setAccountNonExpired(Boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.account_non_locked
     *
     * @return the value of user.account_non_locked
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getAccountNonLocked() {
        return accountNonLocked;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.account_non_locked
     *
     * @param accountNonLocked the value for user.account_non_locked
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setAccountNonLocked(Boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.credentials_non_expired
     *
     * @return the value of user.credentials_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.credentials_non_expired
     *
     * @param credentialsNonExpired the value for user.credentials_non_expired
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setCredentialsNonExpired(Boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.enabled
     *
     * @return the value of user.enabled
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public Boolean getEnabled() {
        return enabled;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.enabled
     *
     * @param enabled the value for user.enabled
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}