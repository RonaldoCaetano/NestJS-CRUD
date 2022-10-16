import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthDto from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signIn(dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
