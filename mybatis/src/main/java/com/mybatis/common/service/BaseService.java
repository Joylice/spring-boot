package com.mybatis.common.service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.StringUtil;
import com.mybatis.common.domain.BaseDomain;
import com.mybatis.common.mapper.BaseMapper;

import com.mybatis.common.util.ApplicationUtil;
import com.mybatis.common.util.IDGenerator;
import com.mybatis.common.util.ReflectionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.IdGenerator;

import java.util.List;


/**
 * Created by cuiyy on 2017/6/30.
 */
public class BaseService<T extends BaseDomain> {
    @Autowired
    ApplicationContext applicationContext;

    private static final Logger logger = LoggerFactory.getLogger(BaseService.class);

    private BaseMapper baseMapper;

    public void setBaseMapper(BaseMapper baseMapper) {
        this.baseMapper = baseMapper;
    }

    private Class clazz;

    protected BaseMapper<T> getMapper() throws Exception {
        if (baseMapper == null) {
            if (clazz == null) {
                clazz = ReflectionUtil.getSuperClassGenericType(getClass(), 0);
            }
            baseMapper = ApplicationUtil.getMapperBean(clazz);
        }
        return baseMapper;
    }

    public Page<T> selectAll(Integer page, Integer rows, String sortName, String sortOrder) throws Exception {
        if (page == null || rows == null) {
            throw new Exception("分页失败");
        }
        PageHelper.startPage(page, rows);
        if (sortName != null) {
            PageHelper.orderBy(sortName + " " + sortOrder);
        } else {
            PageHelper.orderBy("id asc");
        }
        return (Page<T>) getMapper().selectAll();
    }

    public List<T> selectAll() throws Exception {
        return getMapper().selectAll();
    }

    public T selectByPrimaryKey(String id) throws Exception {
        return getMapper().selectByPrimaryKey(id);
    }

    public void insert(T record) throws Exception {
        if (StringUtil.isEmpty(record.getId())) {
            record.setId(IDGenerator.getNextId());
        }
        if (record.getValidFlag() == null) {
            record.setValidFlag(true);
        }
        if (record.getDeleteFlag() == null) {
            record.setDeleteFlag(false);
        }
        if (record.getVersion() == null) {
            record.setVersion(0L);
        }
        if (getMapper().insert(record) != 1) {
            throw new Exception("数据插入失败");
        }
    }
    public void update(T record) throws Exception {
        if(getMapper().updateByPrimaryKey(record)!=1){
            throw new Exception("数据更新失败");
        }
    }
    public void deleteByPrimaryKey(String id) throws Exception {
        if (getMapper().deleteByPrimaryKey(id) != 1) {
            throw new Exception("数据删除失败");
        }
    }
}
