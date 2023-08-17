// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserInfoRes {
  'username'?: (string);
  'password'?: (string);
  'nickname'?: (string);
  'create_time'?: (number | string | Long);
  'update_time'?: (number | string | Long);
}

export interface UserInfoRes__Output {
  'username': (string);
  'password': (string);
  'nickname': (string);
  'create_time': (string);
  'update_time': (string);
}
