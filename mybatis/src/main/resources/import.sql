--
--    Copyright 2015-2017 the original author or authors.
--
--    Licensed under the Apache License, Version 2.0 (the "License");
--    you may not use this file except in compliance with the License.
--    You may obtain a copy of the License at
--
--       http://www.apache.org/licenses/LICENSE-2.0
--
--    Unless required by applicable law or agreed to in writing, software
--    distributed under the License is distributed on an "AS IS" BASIS,
--    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
--    See the License for the specific language governing permissions and
--    limitations under the License.
--

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id BIGINT(20) AUTO_INCREMENT NOT NULL,
  name varchar(64) NOT NULL,
  pwd varchar(64) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into user(name,pwd)values("admin","admin");
insert into user(name,pwd)values("me","me");

DROP TABLE IF EXISTS role;
CREATE TABLE role (
  id BIGINT(20) AUTO_INCREMENT NOT NULL,
  name varchar(64) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into role(name)values("admin");
insert into role(name)values("user");

DROP TABLE IF EXISTS function;
CREATE TABLE function (
  id BIGINT(20) AUTO_INCREMENT NOT NULL,
  name varchar(64) NOT NULL,
  parent_id BIGINT(20) NOT NULL,
  url varchar(128) NOT NULL,
  serial_num int NOT NULL,
  accordion int NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO function( name, parent_id, url, serial_num, accordion)
VALUES
  ( '菜单树', '-1', '', 1, 0),
  ('安全权限', 0, '', 1, 1),
  ( '用户管理', 1, '/user/index', 2, 0),
  ( '角色管理', 1, '/role/index', 3, 0),
  ( '菜单管理', 1, '/function/index', 4, 0),
  ( '用户授权', 1, '/authorize/index', 5, 0),
  ( '用户角色', 1, '/authorize/userRole', 6, 0);

DROP TABLE IF EXISTS role_function;
CREATE TABLE role_function (
  id BIGINT(20) AUTO_INCREMENT NOT NULL,
  role_id BIGINT(20) NOT NULL,
  function_id BIGINT(20) NOT NULL,
  status int NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS user_role;
CREATE TABLE user_role (
  id BIGINT(20) AUTO_INCREMENT NOT NULL,
  role_id BIGINT(20) NOT NULL,
  user_id BIGINT(20) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into user_role(role_id,user_id)values(1,1);
insert into user_role(role_id,user_id)values(2,2);



