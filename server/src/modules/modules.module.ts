import { Module } from '@nestjs/common';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModulesService, PrismaService],
  controllers: [ModulesController],
})
export class ModulesModule {}
