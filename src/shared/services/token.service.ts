import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtRoles } from '@rehuo/common/constants/system.constant';

/**
 * 令牌生成服务
 */
@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) { }

  /**
   * 产生对应的access token和refresh token
   * @param {Record<string, any>} payload JWT加密载荷
   * @param {Record<string, any>} expires JWT超时时间
   */
  async generateToken(
    payload: Record<string, any>,
    expires: Record<string, any>,
  ): Promise<any> {
    const token: any = {};

    token.access = this.jwtService.sign(
      {
        ...payload,
        tk: JwtRoles.ACCESS,
      },
      {
        expiresIn: expires.accessTime,
      },
    );
    token.refresh = this.jwtService.sign(
      {
        ...payload,
        tk: JwtRoles.REFRESH,
      },
      {
        expiresIn: expires.refreshTime,
      },
    );

    return token;
  }

}
