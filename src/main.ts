import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // app.enableCors({ credentials: true });
  app.use(
    session({
      secret: process.env.SESSION_SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        // secure: true,
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8080);
}
bootstrap();
