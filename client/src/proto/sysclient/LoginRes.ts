// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface LoginRes {
  'id'?: (number | string | Long);
  'username'?: (string);
  'access_token'?: (string);
}

export interface LoginRes__Output {
  'id': (string);
  'username': (string);
  'access_token': (string);
}
