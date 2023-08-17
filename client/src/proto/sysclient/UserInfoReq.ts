// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserInfoReq {
  'id'?: (number | string | Long);
}

export interface UserInfoReq__Output {
  'id': (string);
}
