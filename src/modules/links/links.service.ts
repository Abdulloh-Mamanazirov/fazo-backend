import type { Links } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type { LinksCreateRequest, LinksUpdateRequest } from './interfaces';

@Injectable()
export class LinksService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async linksRetrieveAll(): Promise<Links[]> {
    let links = await this.#_prisma.links.findMany();
    return links;
  }

  async linksCreate(payload: LinksCreateRequest): Promise<null> {
    await this.#_prisma.links.create({
      data: {
        facebook: payload.facebook,
        instagram: payload.instagram,
        telegram: payload.telegram,
        linkedIn: payload.linkedIn,
        github: payload.github,
      },
    });

    return null;
  }

  async linksUpdate(payload: LinksUpdateRequest): Promise<null> {
    await this.#_prisma.links.updateMany({
      data: {
        facebook: payload.facebook,
        instagram: payload.instagram,
        telegram: payload.telegram,
        linkedIn: payload.linkedIn,
        github: payload.github,
      },
    });

    return null;
  }
}
