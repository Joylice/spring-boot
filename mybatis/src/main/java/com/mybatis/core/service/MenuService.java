package com.mybatis.core.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mybatis.common.service.BaseService;
import com.mybatis.common.util.JsonUtil;
import com.mybatis.core.domain.Menu;
import com.mybatis.core.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cuiyy on 2017/6/30.
 */
@Service
public class MenuService extends BaseService<Menu> {
    @Autowired
    MenuMapper menuMapper;
    @Autowired
    AuthorityService authorityService;

    public JsonNode getState() throws Exception {
        List<Menu> menuList = selectAll();
        ArrayNode jsonNodes = JsonUtil.getObjectMapper().createArrayNode();
        for (Menu menu : menuList) {
            if (menu.getName() == null) {
                continue;
            }
            List<String> authorities = authorityService.getAuthorities_String_ByMenuId(menu.getId());

            ObjectNode objectNode = JsonUtil.getObjectMapper().createObjectNode();

            objectNode.put("name", menu.getLabel());

            if (menu.getLabel() != null) {
                objectNode.put("label", menu.getLabel());
            }

            if (menu.getUrl() != null) {
                objectNode.put("url", menu.getUrl());
            }

            if (menu.getIcon() != null) {
                objectNode.put("icon", menu.getIcon());
            }

            if (menu.getStyle() != null) {
                objectNode.put("style", menu.getStyle());
            }

            if (menu.getCls() != null) {
                objectNode.put("cls", menu.getCls());
            }

            String _abstract = menu.getAbstraction();
            if (_abstract != null) {
                switch (_abstract) {
                    case "true":
                        objectNode.put("abstract", true);
                        break;
                    case "false":
                        objectNode.put("abstract", false);
                        break;
                    default:
                        objectNode.put("abstract", _abstract);
                        break;
                }
            }

            if (menu.getViews() != null) {
                objectNode.set("views", JsonUtil.toJsonNode(menu.getViews()));
            }

            if (menu.getActive() != null) {
                objectNode.put("active", menu.getActive());
            }

            if (menu.getForceHide() != null) {
                objectNode.put("forceHide", menu.getForceHide());
            }

            if (menu.getParentId() != null) {
                Menu parentMenu = menuMapper.selectByPrimaryKey(menu.getParentId());
                objectNode.put("parent", parentMenu == null ? "" : parentMenu.getName());
            }

            if (authorities != null) {
                objectNode.set("authorities", JsonUtil.toArrayNode(authorities));
            }

            jsonNodes.add(objectNode);
        }
        return jsonNodes;
    }

}
