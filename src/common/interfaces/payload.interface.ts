import { JwtRoles } from '../constants/system.constant';

/**
 * TOKEN载荷类型约定
 * @notes 为了减少网络数据传输量，属性名简写
 */
export interface ITokenPayload {
  id: number; //数据库中的存储ID号
  en: string; //当前系统的环境，如dev、run或者testing
  nm?: string; //名称，商家为手机号，管理员为注册名，用户则为空
  tk?: JwtRoles; //令牌角色，包括refresh和access两种
  data?: any; //Token验证后，数据库中返回的数据
}
