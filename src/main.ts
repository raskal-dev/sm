import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './core/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documention = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documention);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
