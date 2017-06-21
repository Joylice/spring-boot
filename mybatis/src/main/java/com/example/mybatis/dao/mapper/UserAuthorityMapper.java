package com.example.mybatis.dao.mapper;

import com.example.mybatis.model.Authority;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Collection;
import java.util.List;

/**
 * Created by cuiyy on 2017/6/20.
 */
@Mapper
public interface UserAuthorityMapper {
    //获取用户信息及角色
    @Select({"select r.* from" +
            " Auth_user_role sru  " +
            " left join Auth_role r on sru.role_id =r.id where sru.user_id= #{uid}"})
    Collection<Authority> findByUserId(Integer uid);
}
