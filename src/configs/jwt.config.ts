import { registerAs } from '@nestjs/config';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';

//JWT加密密钥
const secretKey = 'sdjsjsdjsdjsdjsdjsdsdjsjd=';

/**
 * JWT相关参数配置
 */
export default registerAs(ConfigNamespaces.JWT, () => ({
  secretKey,
  merchant: {
    accessTime: process.env.JWT_MERCHANT_ACCESS_TOKEN,
    refreshTime: process.env.JWT_MERCHANT_REFRESH_TOKEN,
  },
  user: {
    accessTime: process.env.JWT_USER_ACCESS_TOKEN,
    refreshTime: process.env.JWT_USER_REFRESH_TOKEN,
  },
  admin: {
    accessTime: process.env.JWT_ADMIN_ACCESS_TOKEN,
    refreshTime: process.env.JWT_ADMIN_REFRESH_TOKEN,
  },
}));
