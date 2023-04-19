import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }
  serializeUser(user: any, done: Function) {
    console.log('Serializer User::: ', user);
    done(null, user);
  }
  deserializeUser(payload: any, done: Function) {
    console.log('Deserialize User::: ', payload);
    const user = {
      email: 'email@email.com',
      firstName: 'firstName',
      lastName: 'lastName',
    };
    return user ? done(null, user) : done(null, null);
  }
}
