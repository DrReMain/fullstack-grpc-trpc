package userservicelogic

import (
	"context"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/zeromicro/go-zero/core/logx"
)

type UserInfoLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewUserInfoLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UserInfoLogic {
	return &UserInfoLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *UserInfoLogic) UserInfo(in *sysclient.UserInfoReq) (*sysclient.UserInfoRes, error) {
	// todo: add your logic here and delete this line

	return &sysclient.UserInfoRes{}, nil
}
