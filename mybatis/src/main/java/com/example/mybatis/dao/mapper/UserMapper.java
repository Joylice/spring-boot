package com.example.mybatis.dao.mapper;

import com.example.mybatis.model.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/14.
 */
@Mapper
public interface UserMapper {

    /**
     * 实体类 属性与sql语句中字段别名一致，也可匹配赋值成功，但不适合1对多
     *
     * @Result(property = "roleName",column = "roleName")
     * 根据字段username many去查询权限列表，适配实体类User-->List<Authority>
     * one 去查询单个权限实体，适配实体类User--> Authority
     * @Result(property = "roles", column = "name",javaType = List.class,
     * many = @Many(select = "com.example.mybatis.dao.mapper.RoleMapper.findByUserName"))
     **/
    @Select("select * from Auth_user where name =#{name}")
    @Results(id = "User", value = {
            @Result(property = "id", column = "id"),
            @Result(property = "username", column = "name"),
            @Result(property = "password", column = "pwd"),
    })
    User getUserDetail(String name);
}

