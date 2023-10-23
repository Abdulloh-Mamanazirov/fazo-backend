import type { Project } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  ProjectCreateRequest,
  ProjectDeleteRequest,
  ProjectRetrieveOneRequest,
  ProjectUpdateRequest,
} from './interfaces';

@Injectable()
export class ProjectService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async projectsRetrieveAll(): Promise<Project[]> {
    let projects = await this.#_prisma.project.findMany();
    return projects;
  }

  async projectRetrieveOne(
    payload: ProjectRetrieveOneRequest,
  ): Promise<Project> {
    let project = await this.#_prisma.project.findUnique({
      where: {
        id: payload.id,
      },
    });
    return project;
  }

  async projectCreate(payload: ProjectCreateRequest): Promise<null> {
    await this.#_prisma.project.create({
      data: {
        title: payload.title,
        desc: payload.desc,
        image: payload.image,
        link: payload.link,
        status:payload.status,
        serviceId: payload.serviceId,
      },
    });

    return null;
  }

  async projectUpdate(payload: ProjectUpdateRequest): Promise<null> {
    await this.#_prisma.project.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
        desc: payload.desc,
        image: payload.image,
        link: payload.link,
        status: payload.status,
        serviceId: payload.serviceId,
      },
    });

    return null;
  }

  async projectDelete(payload: ProjectDeleteRequest): Promise<null> {
    await this.#_prisma.project.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
