import { Body, Controller, Get, Post } from '@nestjs/common';
import { ZoomService } from './zoom.service';
import { ZoomUser } from './dto/zoom-user.dto';

@Controller('zoom')
export class ZoomController {
  constructor(private readonly zoomService: ZoomService) {}
  @Post('/getToken')
  getToken() {
    return this.zoomService.login();
  }

  @Post('/users')
  getUsers() {
    return this.zoomService.getUsers();
  }
  @Get('/user')
  checkUser(@Body() user: ZoomUser) {
    return this.zoomService.checkUser(user);
  }

  @Post('/create')
  createUser(@Body() user: ZoomUser) {
    return this.zoomService.createUser(user);
  }
}
