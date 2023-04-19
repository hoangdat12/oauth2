import { Injectable } from '@nestjs/common';
import { UserDetail } from '../ultils/types';

@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(user: UserDetail) {
    console.log(user);
    return { ...user, id: 1, role: 'ADMIN' };
  }
}
