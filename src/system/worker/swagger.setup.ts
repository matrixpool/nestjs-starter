import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ISwaggerSetting } from '../types/swagger.interface';

const swaggerSetting: ISwaggerSetting[] = [

];

const SWAGGER_PREFIX = 'api/';

/**
 * 启动swagger
 */
export function swaggerSetup(app: INestApplication) {
  swaggerSetting.forEach(swagger => {
    const options = new DocumentBuilder()
      .setTitle(swagger.title)
      .setDescription(swagger.description)
      .setVersion(swagger.version)
      .addTag(swagger.title)
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options, {
      include: swagger.modules,
    });
    SwaggerModule.setup(SWAGGER_PREFIX + swagger.tags, app, document);
  });
}
