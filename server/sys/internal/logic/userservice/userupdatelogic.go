package userservicelogic

import (
	"context"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/zeromicro/go-zero/core/logx"
)

type UserUpdateLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewUserUpdateLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UserUpdateLogic {
	return &UserUpdateLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *UserUpdateLogic) UserUpdate(in *sysclient.UserUpdateReq) (*sysclient.UserUpdateRes, error) {
	// todo: add your logic here and delete this line

	return &sysclient.UserUpdateRes{}, nil
}
