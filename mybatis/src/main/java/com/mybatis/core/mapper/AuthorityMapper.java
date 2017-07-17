package com.mybatis.core.mapper;

import com.mybatis.core.domain.Authority;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/30.
 */
@Mapper
public interface AuthorityMapper extends com.mybatis.gen.core.mapper.AuthorityMapper {
    @Select({
            "select",
            "t3.id, t3.version, t3.delete_flag, t3.valid_flag, t3.sort, t3.name",
            "from menu t1",
            "INNER JOIN menu_authority t2 on t1.id = t2.menu_id",
            "INNER JOIN authority t3 on t3.id = t2.authority_id",
            "where t1.id = #{menu_id,jdbcType=VARCHAR}"
    })
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.VARCHAR, id = true),
            @Result(column = "version", property = "version", jdbcType = JdbcType.BIGINT),
            @Result(column = "delete_flag", property = "deleteFlag", jdbcType = JdbcType.BIT),
            @Result(column = "valid_flag", property = "validFlag", jdbcType = JdbcType.BIT),
            @Result(column = "sort", property = "sort", jdbcType = JdbcType.BIGINT),
            @Result(column = "name", property = "name", jdbcType = JdbcType.VARCHAR)
    })
    List<Authority> getAuthoritiesByMenuId(String menuId);
}
