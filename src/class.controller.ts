import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { Class as ClassModel } from '@prisma/client';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  async getModules(): Promise<ClassModel[]> {
    return this.classService.classes({});
  }
  @Get(':id')
  async getModuleById(@Param('id') id: string): Promise<ClassModel> {
    return this.classService.class({ id: id });
  }

  @Post()
  async createModule(
    @Body()
    classData: {
      name: string;
      durationInSeconds: number;
      date: string;
      modulesId: string;
    },
  ): Promise<ClassModel> {
    const { name, durationInSeconds, date, modulesId } = classData;
    return this.classService.createClass({
      name,
      durationInSeconds,
      date,
      Modules: {
        connect: { id: modulesId },
      },
    });
  }

  @Patch(':id')
  async patchModule(
    @Param('id') id: string,
    @Body()
    classData: {
      name: string;
      durationInSeconds: number;
      date: string;
    },
  ): Promise<ClassModel> {
    const { name, durationInSeconds, date } = classData;
    return this.classService.updateClass({
      where: { id: id },
      data: { name, durationInSeconds, date },
    });
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<ClassModel> {
    return this.classService.deleteClass({ id: id });
  }
}
