import { registerAs } from '@nestjs/config';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';

/**
 * SQLDB数据库相关参数配置
 */
export default registerAs(ConfigNamespaces.SQL, () => ({
  type: process.env.SQLDB_TYPE || ('mysql' as any),
  host: process.env.SQLDB_HOST || 'localhost',
  port: parseInt(process.env.SQLDB_PORT, 10) || 3306,
  keepConnectionAlive: true,
  username: process.env.SQLDB_USERNAME,
  password: process.env.SQLDB_PASSWORD,
  database: process.env.SQLDB_DATABASE,
  logging: process.env.APP_ENV === 'dev' || process.env.APP_ENV === 'testing',
  charset: 'utf8mb4',
  entities: [__dirname + '/../models/**/*{.js,.ts}'],
  synchronize: process.env.id ? false : true,
  timezone: '+08:00',
}));
