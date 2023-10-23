import { OnModuleInit, OnModuleDestroy, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(config: ConfigService) {
    super({
      datasourceUrl: "postgresql://postgres:GalaxyA3@localhost:5432/fazo",
      // datasources: {
      //   db: {
      //     url: config.getOrThrow<string>('db.url'),
      //   },
      // },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  onModuleDestroy(): void {
    this.$disconnect();
  }
}
