import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //class-transformer가 적용되게 하기
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
