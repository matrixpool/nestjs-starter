import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';
import { validationSchema } from '@rehuo/configs/validate.schema';
import appConf from '../../configs/app.config';
import mysqlConf from '../../configs/db.config';
import jwtConf from '../../configs/jwt.config';
import { WorkerService } from './worker.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'config/system.env',
      validationSchema: validationSchema,
      load: [
        appConf,
        mysqlConf,
        jwtConf,
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return configService.get(ConfigNamespaces.SQL);
      },
      inject: [ConfigService],
    }),
  ],
  providers: [WorkerService],
})
export class WorkerModule { }
