// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserDeleteRes {
  'id'?: (number | string | Long);
}

export interface UserDeleteRes__Output {
  'id': (string);
}
