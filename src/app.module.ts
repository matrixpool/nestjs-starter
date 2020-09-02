import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';
import appConf from './configs/app.config';
import mysqlConf from './configs/db.config';
import jwtConf from './configs/jwt.config';
import { validationSchema } from './configs/validate.schema';
import { SharedModule } from './shared/shared.module';
import { MasterService } from './system/master/master.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'config/system.env',
      validationSchema,
      load: [appConf, mysqlConf, jwtConf],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return configService.get(ConfigNamespaces.SQL);
      },
      inject: [ConfigService],
    }),
    SharedModule
  ],
  providers: [MasterService],

})
export class AppModule { }

