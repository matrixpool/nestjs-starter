import { IErrorArray } from '../interfaces/error.interface';

export const ERRORS: IErrorArray = {
  /**
   * 系统相关错误
   */
  INTERNAL_SERVER_ERROR: {
    errCode: 30000,
    errMsg: '系统繁忙中，请稍后再试',
  },
  ENVIRONMENT_NOTMATCHED: {
    errCode: 30001,
    errMsg: '令牌请求与运行环境不一致',
  },
  TOKEN_INVALID: {
    errCode: 30002,
    errMsg: '令牌无效',
  },
  RESOURCE_NOTFINDED: {
    errCode: 30003,
    errMsg: '请求的资源不存在',
  },
  ROLE_INVALID: {
    errCode: 30004,
    errMsg: '资源访问权限无效',
  },
  PARAMS_INVALID: {
    errCode: 30005,
    errMsg: '错误的参数输入',
  },
  TOKEN_EXPIRED: {
    errCode: 30006,
    errMsg: '令牌过期',
  },
  RESOURCE_DUP: {
    errCode: 30007,
    errMsg: '资源重复',
  },
  QUERY_INVALID: {
    errCode: 30008,
    errMsg: '错误的查询参数输入',
  },
  RESOURCE_ROLE_INVALID: {
    errCode: 30009,
    errMsg: '资源操作权限无效',
  },
  TOKEN_ROLE_INVALID: {
    errCode: 30010,
    errMsg: '令牌访问权限无效',
  },

  /**
   * 微信服务相关错误
   */
  WECHAT_REQUEST: {
    errCode: 31001,
    errMsg: '微信服务请求失败',
  },
  WECHAT_REQUEST_OPENID: {
    errCode: 31002,
    errMsg: '微信服务请求获取的OPENID错误',
  },
  WECHAT_REQUEST_CODE: {
    errCode: 31003,
    errMsg: '微信二维码请求数据错误',
  },
};
