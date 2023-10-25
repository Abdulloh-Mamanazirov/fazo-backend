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
  VacancyModule,
  VacancyController,
  VacancyService,
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
    VacancyModule,
  ],
  controllers: [
    LoginController,
    ServiceController,
    ProjectController,
    PartnerController,
    LinksController,
    VacancyController,
  ],
  providers: [
    PrismaService,
    LoginService,
    ServiceService,
    ProjectService,
    PartnerService,
    LinksService,
    VacancyService,
  ],
})
export class App {}
