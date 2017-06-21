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
DROP TABLE IF EXISTS  auth_function;
CREATE TABLE auth_function
(
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    parent_id BIGINT(20) NOT NULL,
    url VARCHAR(128) NOT NULL,
    serial_num INT(11) NOT NULL,
    accordion INT(11) NOT NULL
);
DROP Table if EXISTS  auth_role;
CREATE TABLE auth_role
(
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL
);
DROP table if EXISTS auth_role_function;
CREATE TABLE auth_role_function
(
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    role_id BIGINT(20) NOT NULL,
    function_id BIGINT(20) NOT NULL,
    status INT(11) NOT NULL
);
DROP table if EXISTS  auth_user;
CREATE TABLE auth_user
(
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    pwd VARCHAR(64) NOT NULL
);
DROP table if EXISTS auth_user_role;
CREATE TABLE auth_user_role
(
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    role_id BIGINT(20) NOT NULL,
    user_id BIGINT(20) NOT NULL
);
