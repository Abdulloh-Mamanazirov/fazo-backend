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
  CompanyModule,
  CompanyController,
  CompanyService,
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
    CompanyModule,
  ],
  controllers: [
    LoginController,
    ServiceController,
    ProjectController,
    PartnerController,
    LinksController,
    VacancyController,
    CompanyController,
  ],
  providers: [
    PrismaService,
    LoginService,
    ServiceService,
    ProjectService,
    PartnerService,
    LinksService,
    VacancyService,
    CompanyService,
  ],
})
export class App {}
