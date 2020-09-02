import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';
import { TokenService } from './services/token.service';


const providers = [TokenService];

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get(ConfigNamespaces.JWT).secretKey,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: providers,
  exports: providers,
})
export class SharedModule { }
