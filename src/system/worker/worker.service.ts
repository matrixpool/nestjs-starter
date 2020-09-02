import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigNamespaces } from '@rehuo/common/constants/config.constant';
import { IPCMsgTypes } from '../types/ipc.constant';
import { IIPCMsgReq } from '../types/ipc.interface';

@Injectable()
export class WorkerService {
  constructor(private readonly configService: ConfigService) {
    this.listen();
  }

  /**
   * 监听主进程发送的信息
   */
  async listen() {
    process.on('message', (msg: IIPCMsgReq) => {
      const wechatConf = this.configService.get(ConfigNamespaces.WECHAT);
      const deleter = this.configService.get(ConfigNamespaces.OSS).deleter;
      switch (msg.type) {
        case IPCMsgTypes.WX_TOKEN_ALL:
          wechatConf.token = {
            merchant: msg.merchantToken,
            user: msg.userToken,
            publicAccount: msg.publicToken,
          };
          break;
        case IPCMsgTypes.WX_TOKEN_MERCHANT:
          wechatConf.token = {
            merchant: msg.merchantToken,
          };
          break;
        case IPCMsgTypes.WX_TOKEN_USER:
          wechatConf.token = {
            user: msg.userToken,
          };
          break;
        case IPCMsgTypes.WX_TOKEN_PUBLIC:
          wechatConf.token = {
            publicAccount: msg.publicToken,
          };
          break;
        case IPCMsgTypes.OSS_STS_DELETER:
          deleter.sts = msg.deleterSTS;
          break;
        default:
          break;
      }
    });
  }
}
