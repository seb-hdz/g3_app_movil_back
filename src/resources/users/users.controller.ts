import { Body, Controller, Delete, Get } from '@nestjs/common';
import { Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDTO) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':/id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
