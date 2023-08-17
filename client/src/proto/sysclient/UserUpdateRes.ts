// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserUpdateRes {
  'id'?: (number | string | Long);
}

export interface UserUpdateRes__Output {
  'id': (string);
}
