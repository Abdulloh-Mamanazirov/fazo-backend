import type { Company } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  CompanyCreateRequest,
  CompanyUpdateRequest,
  LengthRetrieveResponse,
} from './interfaces';

@Injectable()
export class CompanyService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async companyRetrieveAll(): Promise<Company[]> {
    let company = await this.#_prisma.company.findMany();
    return company;
  }

  async companyRetrieveLength(): Promise<LengthRetrieveResponse> {
    let services_length = await this.#_prisma.service.count();
    let projects_length = await this.#_prisma.project.count();
    let partners_length = await this.#_prisma.partner.count();
    let vacancy_length = await this.#_prisma.vacancy.count();
    let resumes_length = await this.#_prisma.resume.count();

    let projects = await this.#_prisma.service.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            projects: true,
          },
        },
      },
    });
    
    let resumes = await this.#_prisma.vacancy.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            resumes: true,
          },
        },
      },
    });

    return {
      services: services_length,
      projects: projects_length,
      partners: partners_length,
      vacancies: vacancy_length,
      resumes: resumes_length,
      project_stats: projects,
      resume_stats: resumes,
    };
  }

  async companyCreate(payload: CompanyCreateRequest): Promise<null> {
    await this.#_prisma.company.create({
      data: {
        about: payload.about,
        address: payload.address,
        email: payload.email,
        phone: payload.phone,
        telegram: payload.telegram,
      },
    });

    return null;
  }

  async companyUpdate(payload: CompanyUpdateRequest): Promise<null> {
    await this.#_prisma.company.updateMany({
      data: {
        about: payload.about,
        address: payload.address,
        email: payload.email,
        phone: payload.phone,
        telegram: payload.telegram,
      },
    });

    return null;
  }

  async companyDelete(): Promise<null> {
    await this.#_prisma.company.deleteMany();
    return null;
  }
}
