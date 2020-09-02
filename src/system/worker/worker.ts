import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { PROJECT_NAME, URL_PREFIX } from '@rehuo/common/constants/system.constant';
import { MasterService } from '../master/master.service';
import { swaggerSetup } from './swagger.setup';
import { WorkerModule } from './worker.module';

/**
 * worker bootstrap入口函数
 */
async function bootstrap() {
  const id = Number(process.env.id);
  let app;

  process.title =
    id === 0
      ? `${PROJECT_NAME}: gateway and worker process ${id}`
      : `${PROJECT_NAME}: worker process ${id}`;

  app = await NestFactory.create(WorkerModule);

  const configService = app.get(ConfigService);
  const port = configService.get('app.port') + id;

  app.setGlobalPrefix(URL_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      dismissDefaultMessages: true,
      validationError: {
        target: false,
      },
    }),
  );

  //允许跨域
  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  //根据程序运行环境选择是否启动swagger
  if (['dev', 'testing'].includes(configService.get('app.env'))) {
    swaggerSetup(app);
  }

  Logger.log(
    'Start child process succeed, ' + process.title + ', port: ' + port,
    MasterService.name,
  );

  await app.listen(port);
}

bootstrap();
