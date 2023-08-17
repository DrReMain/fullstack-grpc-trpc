package userservicelogic

import (
	"context"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/zeromicro/go-zero/core/logx"
)

type UserDeleteLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewUserDeleteLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UserDeleteLogic {
	return &UserDeleteLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *UserDeleteLogic) UserDelete(in *sysclient.UserDeleteReq) (*sysclient.UserDeleteRes, error) {
	// todo: add your logic here and delete this line

	return &sysclient.UserDeleteRes{}, nil
}
