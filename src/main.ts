import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Community Service API')
    .setDescription('The community service API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  // config 바탕 swagger doc 생성
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI를 위한 path 연결
  // .setup('swagger ui endpoint', app, swagger_document)
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
