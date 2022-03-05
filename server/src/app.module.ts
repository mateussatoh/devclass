import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClassesModule } from './classes/classes.module';
import { ModulesModule } from './modules/modules.module';
@Module({
  imports: [AuthModule, UsersModule, ClassesModule, ModulesModule],
})
export class AppModule {}
