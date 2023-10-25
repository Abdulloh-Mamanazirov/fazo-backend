import type { Vacancies } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  VacancyCreateRequest,
  VacancyDeleteRequest,
  VacancyRetrieveOneRequest,
  VacancyUpdateRequest,
} from './interfaces';

@Injectable()
export class VacancyService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async vacanciesRetrieveAll(): Promise<Vacancies[]> {
    let vacancies = await this.#_prisma.vacancies.findMany();
    return vacancies;
  }

  async vacancyRetrieveOne(
    payload: VacancyRetrieveOneRequest,
  ): Promise<Vacancies> {
    let vacancy = await this.#_prisma.vacancies.findUnique({
      where: {
        id: payload.id,
      },
    });
    return vacancy;
  }

  async vacancyCreate(payload: VacancyCreateRequest): Promise<null> {
    await this.#_prisma.vacancies.create({
      data: {
        title: payload.title,
        desc: payload.desc,
        endsAt: payload.endsAt,
      },
    });

    return null;
  }

  async vacancyUpdate(payload: VacancyUpdateRequest): Promise<null> {
    await this.#_prisma.vacancies.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
        desc: payload.desc,
        endsAt: payload.endsAt,
      },
    });

    return null;
  }

  async vacancyDelete(payload: VacancyDeleteRequest): Promise<null> {
    await this.#_prisma.vacancies.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
