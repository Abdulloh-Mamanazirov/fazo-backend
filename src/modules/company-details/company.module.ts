import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  controllers: [CompanyController],
  providers: [PrismaService, CompanyService],
})
export class CompanyModule {}
