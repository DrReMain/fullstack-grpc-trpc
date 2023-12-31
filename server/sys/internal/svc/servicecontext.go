package svc

import (
	"fullstack-grpc-trpc/model/sysmodel"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
	"sys/internal/config"
)

type ServiceContext struct {
	Config config.Config

	UserModel sysmodel.SysUserModel
}

func NewServiceContext(c config.Config) *ServiceContext {
	sqlConn := sqlx.NewMysql(c.Mysql.Datasource)

	return &ServiceContext{
		Config: c,

		UserModel: sysmodel.NewSysUserModel(sqlConn),
	}
}
