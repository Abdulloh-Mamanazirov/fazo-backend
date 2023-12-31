import type { Project, Service } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  ServiceCreateRequest,
  ServiceDeleteRequest,
  ServiceRetrieveOneRequest,
  ServiceRetrieveProjectsRequest,
  ServicesRetrieveRequest,
  ServiceUpdateRequest,
} from './interfaces';

@Injectable()
export class ServiceService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async servicesRetrieveAll(
    payload: ServicesRetrieveRequest,
  ): Promise<Service[]> {
    let services = await this.#_prisma.service.findMany({
      skip: (payload.page - 1) * payload.take,
      take: payload.take,
    });
    return services;
  }

  async servicesRetrieveProjects(
    payload: ServiceRetrieveProjectsRequest,
  ): Promise<Project[]> {
    let projects = await this.#_prisma.project.findMany({
      where: {
        serviceId: payload.id,
      },
    });
    return projects;
  }

  async servicesRetrieveOne(
    payload: ServiceRetrieveOneRequest,
  ): Promise<Service> {
    let service = await this.#_prisma.service.findUnique({
      where: {
        id: payload.id,
      },
    });
    return service;
  }

  async serviceCreate(payload: ServiceCreateRequest): Promise<null> {
    await this.#_prisma.service.create({
      data: {
        title: payload.title,
        desc: payload.desc,
        image: payload.image,
      },
    });

    return null;
  }

  async serviceUpdate(payload: ServiceUpdateRequest): Promise<null> {
    await this.#_prisma.service.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
        desc: payload.desc,
        image: payload.image,
      },
    });

    return null;
  }

  async serviceDelete(payload: ServiceDeleteRequest): Promise<null> {
    await this.#_prisma.project.deleteMany({
      where: {
        serviceId: payload.id,
      },
    });

    await this.#_prisma.service.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
