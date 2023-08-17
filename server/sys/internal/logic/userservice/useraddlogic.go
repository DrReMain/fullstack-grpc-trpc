package userservicelogic

import (
	"context"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/zeromicro/go-zero/core/logx"
)

type UserAddLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewUserAddLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UserAddLogic {
	return &UserAddLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *UserAddLogic) UserAdd(in *sysclient.UserAddReq) (*sysclient.UserAddRes, error) {
	// todo: add your logic here and delete this line

	return &sysclient.UserAddRes{}, nil
}
