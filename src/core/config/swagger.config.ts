import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Stock Manager API')
  .setDescription(
    'Documentation API pour le projet SM avec Clean Architecture + DDD',
  )
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();
