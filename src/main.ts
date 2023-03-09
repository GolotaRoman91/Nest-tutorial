import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const PORT = 5000;
  await app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
  });
}
bootstrap();
