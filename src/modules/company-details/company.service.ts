import type { Company } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type { CompanyCreateRequest, CompanyUpdateRequest } from './interfaces';

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
