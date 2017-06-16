package com.example.mybatis.controller;

import com.example.mybatis.model.Message;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cuiyy on 2017/6/12.
 */
@Controller
public class HomeController {
    @RequestMapping("/")
    public String index(Model model) {
        Message msg = new Message("测试标题", "测试内容", "额外信息，只对管理员显示");
        model.addAttribute("msg", msg);
        return "home";
    }
}
