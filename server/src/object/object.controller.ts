import { Controller, Post, Body } from '@nestjs/common'
import { ObjectService } from './object.service'

export class ObjectBody {
  url: string
}

@Controller('object')
export class ObjectController {
  constructor(private objectService: ObjectService) {}

  @Post()
  getObject(@Body() object: ObjectBody): string {
    this.objectService.getResults(object.url)
    return 'success'
  }
}
