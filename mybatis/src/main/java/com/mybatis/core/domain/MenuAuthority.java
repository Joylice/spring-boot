package com.mybatis.core.domain;

import com.mybatis.common.domain.BaseDomain;

public class MenuAuthority extends BaseDomain {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column menu_authority.menu_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    private String menuId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column menu_authority.authority_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    private String authorityId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column menu_authority.menu_id
     *
     * @return the value of menu_authority.menu_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    public String getMenuId() {
        return menuId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column menu_authority.menu_id
     *
     * @param menuId the value for menu_authority.menu_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    public void setMenuId(String menuId) {
        this.menuId = menuId == null ? null : menuId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column menu_authority.authority_id
     *
     * @return the value of menu_authority.authority_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    public String getAuthorityId() {
        return authorityId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column menu_authority.authority_id
     *
     * @param authorityId the value for menu_authority.authority_id
     *
     * @mbggenerated Thu Jun 29 14:12:21 CST 2017
     */
    public void setAuthorityId(String authorityId) {
        this.authorityId = authorityId == null ? null : authorityId.trim();
    }
}