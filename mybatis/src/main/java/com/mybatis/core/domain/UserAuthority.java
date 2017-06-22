package com.mybatis.core.domain;

import com.mybatis.common.domain.BaseDomain;

public class UserAuthority extends BaseDomain {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_authority.user_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private String userId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_authority.authority_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    private String authorityId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_authority.user_id
     *
     * @return the value of user_authority.user_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public String getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_authority.user_id
     *
     * @param userId the value for user_authority.user_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_authority.authority_id
     *
     * @return the value of user_authority.authority_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public String getAuthorityId() {
        return authorityId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_authority.authority_id
     *
     * @param authorityId the value for user_authority.authority_id
     *
     * @mbggenerated Thu Jun 22 11:43:29 CST 2017
     */
    public void setAuthorityId(String authorityId) {
        this.authorityId = authorityId == null ? null : authorityId.trim();
    }
}