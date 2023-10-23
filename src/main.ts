import type { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { appConfig } from '@configs';
import { ExceptionFilter } from '@exceptions';
import { App } from './App';

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.create<NestExpressApplication>(App);

  app.useStaticAssets(path.join(__dirname, '../uploads'));

  app.enableCors({ origin: '*' });

  // app.useGlobalFilters(new ExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  );

  await app.listen(appConfig.port);
});
