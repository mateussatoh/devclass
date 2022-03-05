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
import { ClassesService } from './classes.service';
import { Class as ClassModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classService: ClassesService) {}
  @Get()
  async getClases(): Promise<ClassModel[]> {
    return this.classService.classes({});
  }
  @Get(':id')
  async getClassById(@Param('id') id: string): Promise<ClassModel> {
    return this.classService.class({ id: id });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createClass(
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
  @UseGuards(JwtAuthGuard)
  async patchClass(
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
  @UseGuards(JwtAuthGuard)
  async deleteClass(@Param('id') id: string): Promise<ClassModel> {
    return this.classService.deleteClass({ id: id });
  }
}
