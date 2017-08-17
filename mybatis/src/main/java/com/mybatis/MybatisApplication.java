package com.mybatis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class MybatisApplication {

    public static void main(String[] args) {
        //彻底关闭devtool自动重启功能
        //System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(MybatisApplication.class, args);
    }
}
