package com.mybatis.core.mapper;

import com.mybatis.common.mapper.BaseMapper;
import com.mybatis.core.domain.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

/**
 * Created by cuiyy on 2017/6/14.
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {

    /**
     * 实体类 属性与sql语句中字段别名一致，也可匹配赋值成功，但不适合1对多
     *
     * @Result(property = "roleName",column = "roleName")
     * 根据字段username many去查询权限列表，适配实体类User-->List<Authority>
     * one 去查询单个权限实体，适配实体类User--> Authority
     * @Result(property = "roles", column = "name",javaType = List.class,
     * many = @Many(select = "com.example.mybatis.dao.mapper.RoleMapper.findByUserName"))
     **/
    @Select("select * from user where username =#{name}")
    @Results({
            @Result(column="id", property="id", jdbcType= JdbcType.VARCHAR, id=true),
            @Result(column="version", property="version", jdbcType=JdbcType.BIGINT),
            @Result(column="delete_flag", property="deleteFlag", jdbcType=JdbcType.BIT),
            @Result(column="valid_flag", property="validFlag", jdbcType=JdbcType.BIT),
            @Result(column="sort", property="sort", jdbcType=JdbcType.BIGINT),
            @Result(column="username", property="username", jdbcType=JdbcType.VARCHAR),
            @Result(column="name", property="name", jdbcType=JdbcType.VARCHAR),
            @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
            @Result(column="account_non_expired", property="accountNonExpired", jdbcType=JdbcType.BIT),
            @Result(column="account_non_locked", property="accountNonLocked", jdbcType=JdbcType.BIT),
            @Result(column="credentials_non_expired", property="credentialsNonExpired", jdbcType=JdbcType.BIT),
            @Result(column="enabled", property="enabled", jdbcType=JdbcType.BIT)
    })
    User getUserDetail(String name);
}

