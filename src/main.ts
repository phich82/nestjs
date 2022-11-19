import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const isThrowError = false;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: isThrowError,
  });
  await app.listen(8000);
}

bootstrap();
