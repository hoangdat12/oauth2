import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './googleLogin/google.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Get('login/google')
  @UseGuards(GoogleAuthGuard)
  async handleLoginWithGoogle() {
    return { msg: 'ok' };
  }

  @Get('login/google/redirect')
  @UseGuards(GoogleAuthGuard)
  async handleRedirectLoginGoogleSuccess() {
    return { msg: 'Login success!' };
  }

  @Get('status')
  user(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
