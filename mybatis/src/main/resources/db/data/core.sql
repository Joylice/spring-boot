
-- user
INSERT INTO user (id, version, delete_flag, valid_flag, sort, username,  password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES ('8a81c69e4ddbec36014ddbee36040001', 0, FALSE, TRUE, 0, 'test',   '$2a$10$5M4I88avXZxlVDX3d2qG0uNzyMY2.vwCVmHGsY.DLI2aB7B/zAp5q', TRUE, TRUE, TRUE, TRUE);
INSERT INTO user (id, version, delete_flag, valid_flag, sort, username,  password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES ('8a81c69e4ddbec36014ddbee36040002', 0, FALSE, TRUE, 0, 'test1',   '$2a$10$5M4I88avXZxlVDX3d2qG0uNzyMY2.vwCVmHGsY.DLI2aB7B/zAp5q', TRUE, TRUE, TRUE, TRUE);
INSERT INTO user (id, version, delete_flag, valid_flag, sort, username,  password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES ('8a81c69e4ddbec36014ddbee36040003', 0, FALSE, TRUE, 0, 'test2',   '$2a$10$5M4I88avXZxlVDX3d2qG0uNzyMY2.vwCVmHGsY.DLI2aB7B/zAp5q', TRUE, TRUE, TRUE, TRUE);
INSERT INTO user (id, version, delete_flag, valid_flag, sort, username,  password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES ('8a81c69e4ddbec36014ddbee36040004', 0, FALSE, TRUE, 0, 'test3',   '$2a$10$5M4I88avXZxlVDX3d2qG0uNzyMY2.vwCVmHGsY.DLI2aB7B/zAp5q', TRUE, TRUE, TRUE, TRUE);
INSERT INTO user (id, version, delete_flag, valid_flag, sort, username,  password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES ('8a81c69e4ddbec36014ddbee36040005', 0, FALSE, TRUE, 0, 'anonymous', '$2a$10$5M4I88avXZxlVDX3d2qG0uNzyMY2.vwCVmHGsY.DLI2aB7B/zAp5q', TRUE, TRUE, TRUE, TRUE);

-- authority
INSERT INTO authority (id, name) VALUES ('ROLE_SUPER', '超级用户');
INSERT INTO authority (id, name) VALUES ('ROLE_ADMIN', '管理员');
INSERT INTO authority (id, name) VALUES ('ROLE_USER', '普通用户');

-- user_authority
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040001', 'ROLE_SUPER');
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040001', 'ROLE_ADMIN');
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040001', 'ROLE_USER');
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040002', 'ROLE_USER');
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040003', 'ROLE_USER');
INSERT INTO user_authority VALUES ('8a81c69e4ddbec36014ddbee36040004', 'ROLE_USER');
INSERT INTO user_authority VALUES ('6260214483373789185', 'ROLE_USER');

INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804652', 0, false, true, 100, '/', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804653', 0, false, true, 100, '/index.html', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804654', 0, false, true, 100, '/dev.html', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804655', 0, false, true, 100, '/signin', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804656', 0, false, true, 100, '/uiConfig/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804657', 0, false, true, 100, '/localeMessage/messages/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804658', 0, false, true, 100, '/test/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804659', 0, false, true, 100, '/bower_components/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804660', 0, false, true, 100, '/i18n/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804661', 0, false, true, 100, '/styles/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804662', 0, false, true, 100, '/scripts/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804663', 0, false, true, 100, '/dist/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804664', 0, false, true, 100, '/images/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804665', 0, false, true, 100, '/libs/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804666', 0, false, true, 100, '/loader/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804667', 0, false, true, 100, '/bridge/publicInfo/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804668', 0, false, true, 100, '/bridge/publicRt/**', 'permitAll');
INSERT INTO request_map(id, version, delete_flag, valid_flag, sort, url, authority) VALUES ('6263656424509804669', 0, false, true, 100, '/menu/state/**', 'permitAll');
#menu
INSERT INTO menu (id, version, delete_flag, valid_flag, sort, name, label, url, icon, style, cls, abstraction, views, active, resolve, force_hide, parent_id) VALUES ('6273227603415404544', 0, false, true, 300, 'signin', 'menu.signin', '/signin', null, null, null, false, '{"@":{"templateUrl":"/scripts/core/templates/signin.html","controller":"AuthCtrl"}}', false, null, null, '6273227603394433024');

