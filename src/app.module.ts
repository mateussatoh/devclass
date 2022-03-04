import { Module } from '@nestjs/common';
import { ModuleController } from './module.controller';
import { ClassService } from './class.service';
import { ModuleService } from './module.service';
import { PrismaService } from './prisma.service';
import { ClassController } from './class.controller';

@Module({
  imports: [],
  controllers: [ModuleController, ClassController],
  providers: [ClassService, ModuleService, PrismaService],
})
export class AppModule {}
