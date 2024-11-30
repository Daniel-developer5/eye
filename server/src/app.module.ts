import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ObjectController } from './object/object.controller'
import { ObjectService } from './object/object.service'
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config'
// import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [
    CloudinaryModule,
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    // OpenaiModule,
  ],
  controllers: [AppController, ObjectController],
  providers: [AppService, ObjectService, CloudinaryService],
})

export class AppModule {}
