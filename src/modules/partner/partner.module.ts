import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';

@Module({
  controllers: [PartnerController],
  providers: [PrismaService, PartnerService],
})
export class PartnerModule {}
