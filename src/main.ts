import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { hash } from 'bcrypt';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const lol = await hash('mierdaaaaa', 10);
  console.log(lol);
  await app.listen(3000);
}
bootstrap();
