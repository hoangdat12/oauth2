import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
