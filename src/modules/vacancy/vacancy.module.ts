import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';

@Module({
  controllers: [VacancyController],
  providers: [PrismaService, VacancyService],
})
export class VacancyModule {}
