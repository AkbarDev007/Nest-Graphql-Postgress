import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  await app.listen(PORT,()=>{
    console.log(`Server is running on BaseUrl ${baseUrl}`);
  });
}
bootstrap();
