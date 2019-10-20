import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  app.useStaticAssets(join(__dirname, '..', 'index'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  await app.listen(8081);
}
bootstrap();
