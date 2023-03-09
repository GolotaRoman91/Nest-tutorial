import { CreateUserDTO } from './dto/user.dto';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'All users';
  }

  @Post()
  async createUser(@Body() CreateUserDTO: CreateUserDTO) {
    return 'User creater';
  }
}
