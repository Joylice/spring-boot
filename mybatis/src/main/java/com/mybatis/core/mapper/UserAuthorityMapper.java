package com.mybatis.core.mapper;

import com.mybatis.core.domain.Authority;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Collection;

/**
 * Created by cuiyy on 2017/6/20.
 */
@Mapper
public interface UserAuthorityMapper extends com.mybatis.gen.core.mapper.UserAuthorityMapper {
    //获取用户信息及角色
    @Select({"select r.* from" +
            " user_authority ua  " +
            " left join authority r on ua.authority_id =r.id where ua.user_id= #{uid}"})
    Collection<Authority> findByUserId(String uid);
}
