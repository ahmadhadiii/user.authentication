import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationPipe } from '@anatine/zod-nestjs';
import * as dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + `/.env` });


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
