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
  LinksController,
  LinksModule,
  LinksService,
  CompanyController,
  CompanyService,
  ResumeModule,
  ResumeController,
  ResumeService,
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
    LinksModule,
    VacancyModule,
    CompanyModule,
    ResumeModule,
  ],
  controllers: [
    LoginController,
    ServiceController,
    ProjectController,
    PartnerController,
    LinksController,
    VacancyController,
    CompanyController,
    ResumeController,
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
    ResumeService,
  ],
})
export class App {}
