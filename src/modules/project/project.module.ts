import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [PrismaService, ProjectService],
})
export class ProjectModule {}
