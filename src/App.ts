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
import { LinksController, LinksModule, LinksService } from 'modules/links';

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
    LinksModule,
  ],
  controllers: [
    LoginController,
    ServiceController,
    ProjectController,
    PartnerController,
    LinksController,
  ],
  providers: [
    PrismaService,
    LoginService,
    ServiceService,
    ProjectService,
    PartnerService,
    LinksService,
  ],
})
export class App {}
