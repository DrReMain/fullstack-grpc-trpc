// Original file: ../server/sys/sys.proto

import type { Long } from '@grpc/proto-loader';

export interface UserListReq {
  'page_size'?: (number | string | Long);
  'page_no'?: (number | string | Long);
  'username'?: (string);
  'nickname'?: (string);
  '_page_size'?: "page_size";
  '_page_no'?: "page_no";
  '_username'?: "username";
  '_nickname'?: "nickname";
}

export interface UserListReq__Output {
  'page_size'?: (string);
  'page_no'?: (string);
  'username'?: (string);
  'nickname'?: (string);
  '_page_size': "page_size";
  '_page_no': "page_no";
  '_username': "username";
  '_nickname': "nickname";
}
