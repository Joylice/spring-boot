package com.mybatis.core.domain;

import com.mybatis.common.domain.BaseDomain;
import javax.persistence.*;

@Table(name = "request_map")
public class RequestMap extends BaseDomain {
    @Id
    private String id;

    private Long version;

    @Column(name = "delete_flag")
    private Boolean deleteFlag;

    @Column(name = "valid_flag")
    private Boolean validFlag;

    private Long sort;

    private String url;

    private String authority;

    /**
     * @return id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    /**
     * @return version
     */
    public Long getVersion() {
        return version;
    }

    /**
     * @param version
     */
    public void setVersion(Long version) {
        this.version = version;
    }

    /**
     * @return delete_flag
     */
    public Boolean getDeleteFlag() {
        return deleteFlag;
    }

    /**
     * @param deleteFlag
     */
    public void setDeleteFlag(Boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    /**
     * @return valid_flag
     */
    public Boolean getValidFlag() {
        return validFlag;
    }

    /**
     * @param validFlag
     */
    public void setValidFlag(Boolean validFlag) {
        this.validFlag = validFlag;
    }

    /**
     * @return sort
     */
    public Long getSort() {
        return sort;
    }

    /**
     * @param sort
     */
    public void setSort(Long sort) {
        this.sort = sort;
    }

    /**
     * @return url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url
     */
    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    /**
     * @return authority
     */
    public String getAuthority() {
        return authority;
    }

    /**
     * @param authority
     */
    public void setAuthority(String authority) {
        this.authority = authority == null ? null : authority.trim();
    }
}