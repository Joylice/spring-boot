package com.example.mybatis.dao.mapper;

import com.example.mybatis.model.Role;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/15.
 */
@Mapper
public interface RoleMapper {
    //获取用户信息及角色
    @Select({"select r.* from" +
            " Auth_user u LEFT JOIN Auth_user_role sru  " +
            "on u.id= sru.user_id left join Auth_role r on sru.role_id =r.id where u.name= #{name}"})
    List<Role> findByUserName(String name);

}