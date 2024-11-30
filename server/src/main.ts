import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { json } from 'express'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(json({ limit: '500kb', }))

  await app.listen(3000)
}

bootstrap()
