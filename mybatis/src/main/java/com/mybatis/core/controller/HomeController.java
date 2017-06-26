package com.mybatis.core.controller;

import com.mybatis.core.domain.Message;
import com.mybatis.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cuiyy on 2017/6/12.
 */
@Controller
public class HomeController {
    @Autowired
    UserService userService;

    @RequestMapping("/")
    public String index(Model model) {
        Message msg = new Message("测试标题", "测试内容", "额外信息，只对管理员显示");
        model.addAttribute("msg", msg);
        return "home";
    }
}
