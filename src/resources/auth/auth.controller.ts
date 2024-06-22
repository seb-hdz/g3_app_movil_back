import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDTO } from 'src/dto/user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  authUser(@Body() user: AuthUserDTO) {
    return this.authService.authUser(user);
  }
}
