import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  @Get('/health')
  checkHealth() {
    return { status: 'UP', message: 'API is healthy' };
  }
}
