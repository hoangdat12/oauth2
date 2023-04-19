import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID_KEY,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
      callbackURL: 'http://localhost:8080/api/v1/auth/login/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
      refreshToken,
    };
    return user;
  }
}
