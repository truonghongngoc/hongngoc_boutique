import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: process.env.APP_ENV === 'production' ? false : undefined,
  });

  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Trading Plan')
    .setDescription('Trading Plan API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      return `${controllerKey.replace(/Controller/g, '')}${methodKey
        .charAt(0)
        .toUpperCase()}${methodKey.substring(1)}`;
    },
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('/api/swagger', app, document);

  await app.listen(3001);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
