-- 用户表
CREATE TABLE user (
  id                      VARCHAR(32) PRIMARY KEY NOT NULL,
  version                 BIGINT  DEFAULT 0,
  delete_flag             BOOLEAN DEFAULT FALSE,
  valid_flag              BOOLEAN DEFAULT TRUE,
  sort                    BIGINT  DEFAULT 0,
  username                VARCHAR(255),
  password                VARCHAR(255),
  account_non_expired     BOOLEAN,
  account_non_locked      BOOLEAN,
  credentials_non_expired BOOLEAN,
  enabled                 BOOLEAN
);
-- 角色表
CREATE TABLE authority (
  id          VARCHAR(32) PRIMARY KEY NOT NULL,
  version     BIGINT  DEFAULT 0,
  delete_flag BOOLEAN DEFAULT FALSE,
  valid_flag  BOOLEAN DEFAULT TRUE,
  sort        BIGINT  DEFAULT 0,
  name        VARCHAR(255)
);

-- 用户角色关系表
CREATE TABLE user_authority
(
  user_id      VARCHAR(32)  NOT NULL,
  authority_id VARCHAR(255) NOT NULL,
  CONSTRAINT user_authority_pkey PRIMARY KEY (user_id, authority_id),
  CONSTRAINT user_authority_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id),
  CONSTRAINT user_authority_authority_id_fk FOREIGN KEY (authority_id) REFERENCES authority (id)
);

-- 菜单表
CREATE TABLE menu (
  id          VARCHAR(32) PRIMARY KEY,
  version     BIGINT  DEFAULT 0,
  delete_flag BOOLEAN DEFAULT FALSE,
  valid_flag  BOOLEAN DEFAULT TRUE,
  sort        BIGINT  DEFAULT 0,
  name        VARCHAR(255),
  label       VARCHAR(255),
  url         VARCHAR(255),
  icon        VARCHAR(255),
  style       VARCHAR(255),
  cls         VARCHAR(255),
  abstraction    VARCHAR(255),
  views       VARCHAR(2048),
  active      BOOLEAN DEFAULT FALSE,
  resolve     VARCHAR(255),
  force_hide  BOOLEAN DEFAULT FALSE,
  parent_id   VARCHAR(32)
);

CREATE TABLE menu_attr (
  id          VARCHAR(32) PRIMARY KEY,
  version     BIGINT  DEFAULT 0,
  delete_flag BOOLEAN DEFAULT FALSE,
  valid_flag  BOOLEAN DEFAULT TRUE,
  sort        BIGINT  DEFAULT 0,
  name        VARCHAR(255),
  value       VARCHAR(255),
  menu_id     VARCHAR(32),
  CONSTRAINT menu_attr_menu_id_fk FOREIGN KEY (menu_id) REFERENCES menu (id)
);


CREATE TABLE menu_authority (
  menu_id      VARCHAR(32),
  authority_id VARCHAR(255)
);

CREATE TABLE request_map (
  id          VARCHAR(32) PRIMARY KEY NOT NULL,
  version     BIGINT  DEFAULT 0,
  delete_flag BOOLEAN DEFAULT FALSE,
  valid_flag  BOOLEAN DEFAULT TRUE,
  sort        BIGINT  DEFAULT 0,
  url         VARCHAR(255),
  authority   VARCHAR(255)
);


