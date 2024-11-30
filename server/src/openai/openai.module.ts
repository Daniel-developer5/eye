import { Module } from '@nestjs/common';
import { Openai } from './openai';
import { OpenaiService } from './openai.service';

@Module({
  providers: [Openai, OpenaiService]
})
export class OpenaiModule {}
