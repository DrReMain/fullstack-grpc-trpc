// Original file: ../server/sys/sys.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginReq as _sysclient_LoginReq, LoginReq__Output as _sysclient_LoginReq__Output } from '../sysclient/LoginReq';
import type { LoginRes as _sysclient_LoginRes, LoginRes__Output as _sysclient_LoginRes__Output } from '../sysclient/LoginRes';
import type { UserAddReq as _sysclient_UserAddReq, UserAddReq__Output as _sysclient_UserAddReq__Output } from '../sysclient/UserAddReq';
import type { UserAddRes as _sysclient_UserAddRes, UserAddRes__Output as _sysclient_UserAddRes__Output } from '../sysclient/UserAddRes';
import type { UserDeleteReq as _sysclient_UserDeleteReq, UserDeleteReq__Output as _sysclient_UserDeleteReq__Output } from '../sysclient/UserDeleteReq';
import type { UserDeleteRes as _sysclient_UserDeleteRes, UserDeleteRes__Output as _sysclient_UserDeleteRes__Output } from '../sysclient/UserDeleteRes';
import type { UserInfoReq as _sysclient_UserInfoReq, UserInfoReq__Output as _sysclient_UserInfoReq__Output } from '../sysclient/UserInfoReq';
import type { UserInfoRes as _sysclient_UserInfoRes, UserInfoRes__Output as _sysclient_UserInfoRes__Output } from '../sysclient/UserInfoRes';
import type { UserListReq as _sysclient_UserListReq, UserListReq__Output as _sysclient_UserListReq__Output } from '../sysclient/UserListReq';
import type { UserListRes as _sysclient_UserListRes, UserListRes__Output as _sysclient_UserListRes__Output } from '../sysclient/UserListRes';
import type { UserUpdateReq as _sysclient_UserUpdateReq, UserUpdateReq__Output as _sysclient_UserUpdateReq__Output } from '../sysclient/UserUpdateReq';
import type { UserUpdateRes as _sysclient_UserUpdateRes, UserUpdateRes__Output as _sysclient_UserUpdateRes__Output } from '../sysclient/UserUpdateRes';

export interface UserServiceClient extends grpc.Client {
  Login(argument: _sysclient_LoginReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  Login(argument: _sysclient_LoginReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  Login(argument: _sysclient_LoginReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  Login(argument: _sysclient_LoginReq, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  login(argument: _sysclient_LoginReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  login(argument: _sysclient_LoginReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  login(argument: _sysclient_LoginReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  login(argument: _sysclient_LoginReq, callback: grpc.requestCallback<_sysclient_LoginRes__Output>): grpc.ClientUnaryCall;
  
  UserAdd(argument: _sysclient_UserAddReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  UserAdd(argument: _sysclient_UserAddReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  UserAdd(argument: _sysclient_UserAddReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  UserAdd(argument: _sysclient_UserAddReq, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  userAdd(argument: _sysclient_UserAddReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  userAdd(argument: _sysclient_UserAddReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  userAdd(argument: _sysclient_UserAddReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  userAdd(argument: _sysclient_UserAddReq, callback: grpc.requestCallback<_sysclient_UserAddRes__Output>): grpc.ClientUnaryCall;
  
  UserDelete(argument: _sysclient_UserDeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  UserDelete(argument: _sysclient_UserDeleteReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  UserDelete(argument: _sysclient_UserDeleteReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  UserDelete(argument: _sysclient_UserDeleteReq, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  userDelete(argument: _sysclient_UserDeleteReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  userDelete(argument: _sysclient_UserDeleteReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  userDelete(argument: _sysclient_UserDeleteReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  userDelete(argument: _sysclient_UserDeleteReq, callback: grpc.requestCallback<_sysclient_UserDeleteRes__Output>): grpc.ClientUnaryCall;
  
  UserInfo(argument: _sysclient_UserInfoReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  UserInfo(argument: _sysclient_UserInfoReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  UserInfo(argument: _sysclient_UserInfoReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  UserInfo(argument: _sysclient_UserInfoReq, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  userInfo(argument: _sysclient_UserInfoReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  userInfo(argument: _sysclient_UserInfoReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  userInfo(argument: _sysclient_UserInfoReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  userInfo(argument: _sysclient_UserInfoReq, callback: grpc.requestCallback<_sysclient_UserInfoRes__Output>): grpc.ClientUnaryCall;
  
  UserList(argument: _sysclient_UserListReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  UserList(argument: _sysclient_UserListReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  UserList(argument: _sysclient_UserListReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  UserList(argument: _sysclient_UserListReq, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  userList(argument: _sysclient_UserListReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  userList(argument: _sysclient_UserListReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  userList(argument: _sysclient_UserListReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  userList(argument: _sysclient_UserListReq, callback: grpc.requestCallback<_sysclient_UserListRes__Output>): grpc.ClientUnaryCall;
  
  UserUpdate(argument: _sysclient_UserUpdateReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  UserUpdate(argument: _sysclient_UserUpdateReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  UserUpdate(argument: _sysclient_UserUpdateReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  UserUpdate(argument: _sysclient_UserUpdateReq, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  userUpdate(argument: _sysclient_UserUpdateReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  userUpdate(argument: _sysclient_UserUpdateReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  userUpdate(argument: _sysclient_UserUpdateReq, options: grpc.CallOptions, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  userUpdate(argument: _sysclient_UserUpdateReq, callback: grpc.requestCallback<_sysclient_UserUpdateRes__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_sysclient_LoginReq__Output, _sysclient_LoginRes>;
  
  UserAdd: grpc.handleUnaryCall<_sysclient_UserAddReq__Output, _sysclient_UserAddRes>;
  
  UserDelete: grpc.handleUnaryCall<_sysclient_UserDeleteReq__Output, _sysclient_UserDeleteRes>;
  
  UserInfo: grpc.handleUnaryCall<_sysclient_UserInfoReq__Output, _sysclient_UserInfoRes>;
  
  UserList: grpc.handleUnaryCall<_sysclient_UserListReq__Output, _sysclient_UserListRes>;
  
  UserUpdate: grpc.handleUnaryCall<_sysclient_UserUpdateReq__Output, _sysclient_UserUpdateRes>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_sysclient_LoginReq, _sysclient_LoginRes, _sysclient_LoginReq__Output, _sysclient_LoginRes__Output>
  UserAdd: MethodDefinition<_sysclient_UserAddReq, _sysclient_UserAddRes, _sysclient_UserAddReq__Output, _sysclient_UserAddRes__Output>
  UserDelete: MethodDefinition<_sysclient_UserDeleteReq, _sysclient_UserDeleteRes, _sysclient_UserDeleteReq__Output, _sysclient_UserDeleteRes__Output>
  UserInfo: MethodDefinition<_sysclient_UserInfoReq, _sysclient_UserInfoRes, _sysclient_UserInfoReq__Output, _sysclient_UserInfoRes__Output>
  UserList: MethodDefinition<_sysclient_UserListReq, _sysclient_UserListRes, _sysclient_UserListReq__Output, _sysclient_UserListRes__Output>
  UserUpdate: MethodDefinition<_sysclient_UserUpdateReq, _sysclient_UserUpdateRes, _sysclient_UserUpdateReq__Output, _sysclient_UserUpdateRes__Output>
}
