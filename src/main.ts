import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(process.env.PORT, '0.0.0.0'); 
}
bootstrap();
