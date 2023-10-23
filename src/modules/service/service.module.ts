import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  controllers: [ServiceController],
  providers: [PrismaService, ServiceService],
})
export class ServiceModule {}
