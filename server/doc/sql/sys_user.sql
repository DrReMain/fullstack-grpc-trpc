create table sys_user (
    id bigint auto_increment comment '编号',
    username varchar(255) not null comment '用户名',
    password varchar(255) not null comment '密码',
    nickname varchar(255) null comment '昵称',
    create_time timestamp default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '更新时间',
    constraint username unique (username),
    constraint id primary key (id)
);

INSERT INTO sys_user (id, username, password, nickname) VALUES (1, "admin", "admin123", "admin_nickname");
INSERT INTO sys_user (id, username, password, nickname) VALUES (2, "user1", "user0001", "i_am_user_0001");
INSERT INTO sys_user (id, username, password, nickname) VALUES (3, "user2", "user0002", "i_am_user_0002");
INSERT INTO sys_user (id, username, password, nickname) VALUES (4, "user3", "user0003", "i_am_user_0003");
INSERT INTO sys_user (id, username, password, nickname) VALUES (5, "user4", "user0004", "i_am_user_0004");