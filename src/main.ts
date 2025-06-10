import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // Permita requisições apenas deste frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Se você for usar cookies ou credenciais (por exemplo, sessões), isso é importante
    allowedHeaders: 'Content-Type, Accept, Authorization', // Cabeçalhos permitidos
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  // await app.listen(process.env.PORT, '0.0.0.0'); 
}
bootstrap();
