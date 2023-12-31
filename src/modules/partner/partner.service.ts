import type { Partner } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  PartnerCreateRequest,
  PartnerDeleteRequest,
  PartnersRetrieveRequest,
  PartnerUpdateRequest,
} from './interfaces';

@Injectable()
export class PartnerService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async partnersRetrieveAll(payload: PartnersRetrieveRequest): Promise<Partner[]> {
    let partners = await this.#_prisma.partner.findMany({
      skip: (payload.page - 1) * payload.take,
      take: payload.take,
    });
    return partners;
  }

  async partnerCreate(payload: PartnerCreateRequest): Promise<null> {
    await this.#_prisma.partner.create({
      data: {
        image: payload.image,
        name: payload.name,
      },
    });

    return null;
  }

  async partnerUpdate(payload: PartnerUpdateRequest): Promise<null> {
    await this.#_prisma.partner.update({
      where: {
        id: payload.id,
      },
      data: {
        image: payload.image,
        name: payload.name,
      },
    });

    return null;
  }

  async partnerDelete(payload: PartnerDeleteRequest): Promise<null> {
    await this.#_prisma.partner.delete({
      where: {
        id: payload.id,
      },
    });

    return null;
  }
}
