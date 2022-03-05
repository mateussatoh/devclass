import {
  Controller,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async signupUser(
    @Body()
    classData: {
      username: string;
      email: string;
      password: string;
      isAdmin?: boolean;
    },
  ): Promise<{
    id: string;
    username: string;
    email: string;
    isAdmin: boolean;
  }> {
    const { username, email, password, isAdmin } = classData;
    return this.userService.createUser({
      username,
      email,
      password,
      isAdmin,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patchUser(
    @Param('id') id: string,
    @Body()
    userData: {
      username: string;
      email: string;
      password: string;
      isAdmin?: boolean;
    },
  ): Promise<UserModel> {
    const { username, email, password, isAdmin } = userData;
    return this.userService.updateUser({
      where: { id: id },
      data: { username, email, password, isAdmin },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: id });
  }
}
