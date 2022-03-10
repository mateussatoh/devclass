import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: {
    username: string;
    password: string;
  }): Promise<any> {
    const { username, password } = data;
    const user = await this.usersService.user({ username: username });
    const matchPassword = await bcrypt.compare(password, user.password);
    if (user && matchPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      ...user,
    };
  }
}
