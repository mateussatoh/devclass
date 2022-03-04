import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ClassesService, PrismaService],
  controllers: [ClassesController],
})
export class ClassesModule {}
