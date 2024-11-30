import { Module } from '@nestjs/common'
import { CloudinaryProvider } from './cloudinary'
import { CloudinaryService } from './cloudinary.service'

@Module({
  providers: [CloudinaryProvider, CloudinaryService]
})
export class CloudinaryModule {}
