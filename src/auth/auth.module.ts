import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './googleLogin/google.strategy';
import { SessionSerializer } from './googleLogin/google.serializer';

@Module({
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    GoogleStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
