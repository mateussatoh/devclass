import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { ModuleService } from './module.service';
import { ClassService } from './class.service';
import { Module as ModuleModel, Class as ClassModel } from '@prisma/client';

@Controller('modules')
export class ModuleController {
  constructor(
    private readonly moduleService: ModuleService,
    private readonly classService: ClassService,
  ) {}

  @Get()
  async getModules(): Promise<ModuleModel[]> {
    return this.moduleService.modules({});
  }
  @Get(':id')
  async getModuleById(@Param('id') id: string): Promise<ModuleModel> {
    return this.moduleService.module({ id: id });
  }

  @Post()
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
  async deletePost(@Param('id') id: string): Promise<ModuleModel> {
    return this.moduleService.deleteModule({ id: id });
  }
}
