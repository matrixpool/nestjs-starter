/**
 * 系统中所有常量约束
 */
export enum SystemConstants {
  //短长度
  LITTLE_LENGTH = 16,

  //较短长度
  SMALL_LENGTH = 32,

  //普通长度
  NORMAL_LENGTH = 128,

  //较大长度
  MORE_LENGTH = 2048,

  //口令最小长度
  PWD_MIN_LENGTH = 6,

  //口令最大长度
  PWD_MAX_LENGTH = 12,

  //电话码号最小长度
  PHONE_MIN_LENGTH = 11,

  //电话号码最大长度
  PHONE_MAX_LENGTH = 13,

  //图片一次上传最小张数值
  IMAGE_UPLOAD_MIN_COUNT = 1,

  //图片一次上传最多张数值
  IMAGE_UPLOAD_MAX_COUNT = 9,

  //查询数据库一次最大返回的条目数
  SQLDB_QUERY_PAGE_COUNT_MAX = 50,

  //查询数据库一次最小返回的条目数
  SQLDB_QUERY_PAGE_COUNT_MIN = 1,

  //查询数据库一次缺省返回的条目数
  SQLDB_QUERY_PAGE_COUNT_DEFAULT = 10,
}

/**
 * 令牌角色定义
 */
export enum JwtRoles {
  ACCESS = 'ar', //访问令牌
  REFRESH = 'rr', //刷新令牌
}

/**
 * API请求返回码定义
 */
export enum ReturnStatus {
  OK = 'SUCCESS', //返回成功
  ERR = 'FAILURE', //返回失败
}

/**
 * 软件版本号
 */
export const VERSION = '1.0.0';

/**
 * 路由全局前缀
 */
export const URL_PREFIX = 'api/v1';

/**
 * 时间戳相关值定义
 */
export enum TIME {
  MIN_DAY_TIMESTAMP = 0, //每天的最低时间戳值
  MAX_DAY_TIMESTAMP = 86400000, //每天的最高时间戳值
  DOUBLE_DAY_TIMESTAMP = 172800000, //两天的时间戳
  MAX_DAY_SECONDS = 86400, //每日的秒数
}


/**
 * 项目名称
 */
export const PROJECT_NAME = 'rehuo';

/**
 * 系统任务定时间隔时间
 */
export enum SystemTaskInterval {
  CHILD_PROCESS_CHECK_TIME = 2 * 1000, //2秒检测一次子进程
  CACHE_DATABASE_SYNC_TIME = 1 * 60 * 60 * 1000, //10分钟进行一次cache同步到数据库操作
}
