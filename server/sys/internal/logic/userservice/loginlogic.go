package userservicelogic

import (
	"context"
	"encoding/json"
	"errors"
	"time"

	"sys/internal/svc"
	"sys/sysclient"

	"github.com/dgrijalva/jwt-go"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/core/stores/sqlc"
)

type LoginLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewLoginLogic(ctx context.Context, svcCtx *svc.ServiceContext) *LoginLogic {
	return &LoginLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *LoginLogic) Login(in *sysclient.LoginReq) (*sysclient.LoginRes, error) {
	userInfo, err := l.svcCtx.UserModel.FindOneByUsername(l.ctx, in.Username)

	switch err {
	case nil:
	case sqlc.ErrNotFound:
		logx.WithContext(l.ctx).Errorf("用户不存在,参数:%s,异常:%s", in.Username, err.Error())
		return nil, errors.New("用户不存在")
	default:
		logx.WithContext(l.ctx).Errorf("用户登录失败,参数:%s,异常:%s", in.Username, err.Error())
		return nil, err
	}

	if userInfo.Password != in.Password {
		logx.WithContext(l.ctx).Errorf("用户密码不正确,参数:%s", in.Password)
		return nil, errors.New("用户密码不正确")
	}

	now := time.Now().Unix()
	accessSecret := l.svcCtx.Config.JWT.AccessSecret
	jwtToken, err := l.getJwtToken(accessSecret, now, userInfo.Id, userInfo.Username)

	if err != nil {
		reqStr, _ := json.Marshal(in)
		logx.WithContext(l.ctx).Errorf("生成token失败,参数:%s,异常:%s", reqStr, err.Error())
		return nil, err
	}

	res := &sysclient.LoginRes{
		Id:          userInfo.Id,
		Username:    userInfo.Username,
		AccessToken: jwtToken,
	}

	reqStr, _ := json.Marshal(in)
	resStr, _ := json.Marshal(res)
	logx.WithContext(l.ctx).Infof("登录成功,参数:%s,响应:%s", reqStr, resStr)

	return res, nil
}

func (l *LoginLogic) getJwtToken(secretKey string, iat, id int64, username string) (string, error) {
	claims := make(jwt.MapClaims)
	claims["iat"] = iat
	claims["id"] = id
	claims["username"] = username
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims = claims
	return token.SignedString([]byte(secretKey))
}

// grpcurl --plaintext -d '{"username":"admin", "password":"admin123"}' 127.0.0.1:8080 sysclient.UserService/Login
