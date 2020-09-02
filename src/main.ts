import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;


/**
 * 系统bootstrap入口函数
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();