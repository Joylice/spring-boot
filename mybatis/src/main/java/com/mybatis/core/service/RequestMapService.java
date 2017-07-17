package com.mybatis.core.service;

import com.mybatis.core.domain.RequestMap;
import com.mybatis.core.mapper.RequestMapMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/30.
 */
@Service
public class RequestMapService {
    @Autowired
    RequestMapMapper requestMapMapper;

    public List<RequestMap> getAll() {
        return requestMapMapper.selectAll();
    }
}
