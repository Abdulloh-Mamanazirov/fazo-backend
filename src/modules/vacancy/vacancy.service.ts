import type { Vacancy } from '@prisma/client';
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

  async vacanciesRetrieveAll(): Promise<Vacancy[]> {
    let vacancies = await this.#_prisma.vacancy.findMany();
    return vacancies;
  }

  async vacancyRetrieveOne(
    payload: VacancyRetrieveOneRequest,
  ): Promise<Vacancy> {
    let vacancy = await this.#_prisma.vacancy.findUnique({
      where: {
        id: payload.id,
      },
    });
    return vacancy;
  }

  async vacancyCreate(payload: VacancyCreateRequest): Promise<null> {
    await this.#_prisma.vacancy.create({
      data: {
        title: payload.title,
        require: payload.require,
        offer: payload.offer,
        days: payload.days,
        time: payload.time,
        salary: payload.salary,
        endsAt: payload.endsAt,
      },
    });

    return null;
  }

  async vacancyUpdate(payload: VacancyUpdateRequest): Promise<null> {
    await this.#_prisma.vacancy.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
        require: payload.require,
        offer: payload.offer,
        days: payload.days,
        time: payload.time,
        salary: payload.salary,
        endsAt: payload.endsAt,
      },
    });

    return null;
  }

  async vacancyDelete(payload: VacancyDeleteRequest): Promise<null> {
    await this.#_prisma.vacancy.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
