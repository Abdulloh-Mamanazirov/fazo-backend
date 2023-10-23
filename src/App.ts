import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from '@configs';
import { PrismaService } from '@prisma';
import {
  ServiceController,
  ServiceModule,
  ServiceService,
  ProjectController,
  ProjectModule,
  ProjectService,
  PartnerController,
  PartnerModule,
  PartnerService,
  LoginModule,
  LoginService,
  LoginController,
} from '@modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
    }),
    LoginModule,
    ServiceModule,
    ProjectModule,
    PartnerModule,
  ],
  controllers: [
    LoginController,
    ServiceController,
    ProjectController,
    PartnerController,
  ],
  providers: [
    PrismaService,
    LoginService,
    ServiceService,
    ProjectService,
    PartnerService,
  ],
})
export class App {}
