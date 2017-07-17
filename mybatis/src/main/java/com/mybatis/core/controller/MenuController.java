package com.mybatis.core.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.mybatis.core.domain.RequestMap;
import com.mybatis.core.mapper.RequestMapMapper;
import com.mybatis.core.service.MenuService;
import com.mybatis.core.service.RequestMapService;
import com.mybatis.gen.core.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/28.
 */
@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    MenuService menuService;

    @RequestMapping(value = "/state", method = RequestMethod.GET)
    public JsonNode state() throws Exception {
        return menuService.getState();
    }
}
