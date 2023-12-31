// Code generated by goctl. DO NOT EDIT.

package sysmodel

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"time"

	"github.com/zeromicro/go-zero/core/stores/builder"
	"github.com/zeromicro/go-zero/core/stores/sqlc"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
	"github.com/zeromicro/go-zero/core/stringx"
)

var (
	sysUserFieldNames          = builder.RawFieldNames(&SysUser{})
	sysUserRows                = strings.Join(sysUserFieldNames, ",")
	sysUserRowsExpectAutoSet   = strings.Join(stringx.Remove(sysUserFieldNames, "`id`", "`create_at`", "`create_time`", "`created_at`", "`update_at`", "`update_time`", "`updated_at`"), ",")
	sysUserRowsWithPlaceHolder = strings.Join(stringx.Remove(sysUserFieldNames, "`id`", "`create_at`", "`create_time`", "`created_at`", "`update_at`", "`update_time`", "`updated_at`"), "=?,") + "=?"
)

type (
	sysUserModel interface {
		Insert(ctx context.Context, data *SysUser) (sql.Result, error)
		FindOne(ctx context.Context, id int64) (*SysUser, error)
		FindOneByUsername(ctx context.Context, username string) (*SysUser, error)
		Update(ctx context.Context, data *SysUser) error
		Delete(ctx context.Context, id int64) error
	}

	defaultSysUserModel struct {
		conn  sqlx.SqlConn
		table string
	}

	SysUser struct {
		Id         int64          `db:"id"`          // 编号
		Username   string         `db:"username"`    // 用户名
		Password   string         `db:"password"`    // 密码
		Nickname   sql.NullString `db:"nickname"`    // 昵称
		CreateTime time.Time      `db:"create_time"` // 创建时间
		UpdateTime time.Time      `db:"update_time"` // 更新时间
	}
)

func newSysUserModel(conn sqlx.SqlConn) *defaultSysUserModel {
	return &defaultSysUserModel{
		conn:  conn,
		table: "`sys_user`",
	}
}

func (m *defaultSysUserModel) withSession(session sqlx.Session) *defaultSysUserModel {
	return &defaultSysUserModel{
		conn:  sqlx.NewSqlConnFromSession(session),
		table: "`sys_user`",
	}
}

func (m *defaultSysUserModel) Delete(ctx context.Context, id int64) error {
	query := fmt.Sprintf("delete from %s where `id` = ?", m.table)
	_, err := m.conn.ExecCtx(ctx, query, id)
	return err
}

func (m *defaultSysUserModel) FindOne(ctx context.Context, id int64) (*SysUser, error) {
	query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", sysUserRows, m.table)
	var resp SysUser
	err := m.conn.QueryRowCtx(ctx, &resp, query, id)
	switch err {
	case nil:
		return &resp, nil
	case sqlc.ErrNotFound:
		return nil, ErrNotFound
	default:
		return nil, err
	}
}

func (m *defaultSysUserModel) FindOneByUsername(ctx context.Context, username string) (*SysUser, error) {
	var resp SysUser
	query := fmt.Sprintf("select %s from %s where `username` = ? limit 1", sysUserRows, m.table)
	err := m.conn.QueryRowCtx(ctx, &resp, query, username)
	switch err {
	case nil:
		return &resp, nil
	case sqlc.ErrNotFound:
		return nil, ErrNotFound
	default:
		return nil, err
	}
}

func (m *defaultSysUserModel) Insert(ctx context.Context, data *SysUser) (sql.Result, error) {
	query := fmt.Sprintf("insert into %s (%s) values (?, ?, ?)", m.table, sysUserRowsExpectAutoSet)
	ret, err := m.conn.ExecCtx(ctx, query, data.Username, data.Password, data.Nickname)
	return ret, err
}

func (m *defaultSysUserModel) Update(ctx context.Context, newData *SysUser) error {
	query := fmt.Sprintf("update %s set %s where `id` = ?", m.table, sysUserRowsWithPlaceHolder)
	_, err := m.conn.ExecCtx(ctx, query, newData.Username, newData.Password, newData.Nickname, newData.Id)
	return err
}

func (m *defaultSysUserModel) tableName() string {
	return m.table
}
