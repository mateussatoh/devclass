import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ModulesService } from './modules.service';
import { Module as ModuleModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('modules')
export class ModulesController {
  constructor(private readonly moduleService: ModulesService) {}

  @Get()
  async getModules(): Promise<ModuleModel[]> {
    return this.moduleService.modules({});
  }
  @Get(':id')
  async getModuleById(@Param('id') id: string): Promise<ModuleModel> {
    return this.moduleService.module({ id: id });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createModule(
    @Body()
    moduleData: {
      name: string;
      description: string;
      tech: string;
    },
  ): Promise<ModuleModel> {
    const { name, description, tech } = moduleData;
    return this.moduleService.createModule({
      name,
      description,
      tech,
    });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async patchModule(
    @Param('id') id: string,
    @Body()
    moduleData: {
      name: string;
      description: string;
      tech: string;
    },
  ): Promise<ModuleModel> {
    const { name, description, tech } = moduleData;
    return this.moduleService.updateModule({
      where: { id: id },
      data: { name, description, tech },
    });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteModule(@Param('id') id: string): Promise<ModuleModel> {
    return this.moduleService.deleteModule({ id: id });
  }
}
