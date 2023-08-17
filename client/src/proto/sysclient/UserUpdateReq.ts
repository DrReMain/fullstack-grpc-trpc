// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserUpdateReq {
  'id'?: (number | string | Long);
  'username'?: (string);
  'password'?: (string);
  'nickname'?: (string);
}

export interface UserUpdateReq__Output {
  'id': (string);
  'username': (string);
  'password': (string);
  'nickname': (string);
}
