package userservicelogic

import (
	"context"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/zeromicro/go-zero/core/logx"
)

type UserListLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewUserListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UserListLogic {
	return &UserListLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *UserListLogic) UserList(in *sysclient.UserListReq) (*sysclient.UserListRes, error) {
	// todo: add your logic here and delete this line

	return &sysclient.UserListRes{}, nil
}
