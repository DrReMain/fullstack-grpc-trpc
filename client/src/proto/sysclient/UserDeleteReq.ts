// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserDeleteReq {
  'id'?: (number | string | Long);
}

export interface UserDeleteReq__Output {
  'id': (string);
}
