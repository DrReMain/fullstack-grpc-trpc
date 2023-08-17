// Original file: ../server/sys/sys.proto

import type { UserInfoRes as _sysclient_UserInfoRes, UserInfoRes__Output as _sysclient_UserInfoRes__Output } from '../sysclient/UserInfoRes';
import type { Long } from '@grpc/proto-loader';

export interface UserListRes {
  'total'?: (number | string | Long);
  'page_size'?: (number | string | Long);
  'page_no'?: (number | string | Long);
  'has_next_page'?: (boolean);
  'list'?: (_sysclient_UserInfoRes)[];
}

export interface UserListRes__Output {
  'total': (string);
  'page_size': (string);
  'page_no': (string);
  'has_next_page': (boolean);
  'list': (_sysclient_UserInfoRes__Output)[];
}
