import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
  controllers: [ResumeController],
  providers: [PrismaService, ResumeService],
})
export class ResumeModule {}
