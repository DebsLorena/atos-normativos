import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // ✅ Configuração Swagger
  const config = new DocumentBuilder()
    .setTitle('API Atos Normativos')
    .setDescription('Documentação da API para gestão de atos normativos')
    .setVersion('1.0')
    .addTag('Atos')
    .addBearerAuth() // Vamos usar para JWT depois
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  console.log(`📄 Swagger disponível em http://localhost:${port}/api/docs`);
}

bootstrap().catch((err) => {
  console.error('❌ Erro ao iniciar a aplicação', err);
  process.exit(1);
});
