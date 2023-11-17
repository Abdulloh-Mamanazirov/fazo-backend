import type { Resume } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import {
  ResumeSendRequest,
  ResumeDeleteRequest,
  ResumeRetrieveOneRequest,
} from './interfaces';

@Injectable()
export class ResumeService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async resumesRetrieveAll(): Promise<Resume[]> {
    let resumes = await this.#_prisma.resume.findMany();
    return resumes;
  }

  async resumeRetrieveOne(payload: ResumeRetrieveOneRequest): Promise<Resume> {
    let resume = await this.#_prisma.resume.findUnique({
      where: {
        id: payload.id,
      },
    });
    return resume;
  }

  async resumeCreate(payload: ResumeSendRequest): Promise<null> {
    await this.#_prisma.resume.create({
      data: {
        name: payload.name,
        phone: payload.phone,
        about: payload.about,
        resume: payload.resume,
        vacancy_id: payload.vacancy_id,
      },
    });

    return null;
  }

  async resumeDelete(payload: ResumeDeleteRequest): Promise<null> {
    await this.#_prisma.resume.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
