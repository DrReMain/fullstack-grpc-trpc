import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _sysclient_UserServiceClient, UserServiceDefinition as _sysclient_UserServiceDefinition } from './sysclient/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sysclient: {
    LoginReq: MessageTypeDefinition
    LoginRes: MessageTypeDefinition
    UserAddReq: MessageTypeDefinition
    UserAddRes: MessageTypeDefinition
    UserDeleteReq: MessageTypeDefinition
    UserDeleteRes: MessageTypeDefinition
    UserInfoReq: MessageTypeDefinition
    UserInfoRes: MessageTypeDefinition
    UserListReq: MessageTypeDefinition
    UserListRes: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _sysclient_UserServiceClient> & { service: _sysclient_UserServiceDefinition }
    UserUpdateReq: MessageTypeDefinition
    UserUpdateRes: MessageTypeDefinition
  }
}

