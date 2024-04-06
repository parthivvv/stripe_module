// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Only allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Customize which HTTP methods are allowed
    allowedHeaders: 'Content-Type, Accept', // Customize which headers can be sent to the API
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
