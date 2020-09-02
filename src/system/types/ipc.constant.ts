/**
 * 定义主进程和工作进程之间的通信内容类型
 */
export enum IPCMsgTypes {
  WX_TOKEN_ALL = 'wxt_a', //所有微信TOKEN
  WX_TOKEN_MERCHANT = 'wxt_m', //商家版小程序TOKEN
  WX_TOKEN_USER = 'wxt_u', //用户版小程序TOKEN
  WX_TOKEN_PUBLIC = 'wxt_p', //公众号TOKEN
  OSS_STS_DELETER = 'sts_d', //ALIOSS删除令牌
}
