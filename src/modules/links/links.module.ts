import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

@Module({
  controllers: [LinksController],
  providers: [PrismaService, LinksService],
})
export class LinksModule {}
