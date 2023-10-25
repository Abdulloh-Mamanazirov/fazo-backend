import type { Links } from '@prisma/client';
import { TokenInterceptor } from '@interceptors';
import {
  Get,
  Post,
  Body,
  Patch,
  HttpCode,
  Controller,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksCreateRequestDto, LinksUpdateRequestDto } from './dtos';

@Controller({
  path: '/links',
  version: '1',
})
export class LinksController {
  readonly #_service: LinksService;
  constructor(service: LinksService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async linksRetrieveAll(): Promise<Links[]> {
    return this.#_service.linksRetrieveAll();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  async linksCreate(@Body() body: LinksCreateRequestDto): Promise<null> {
    return this.#_service.linksCreate(body);
  }

  @Patch('/update')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async linksUpdate(@Body() body: LinksUpdateRequestDto): Promise<null> {
    return this.#_service.linksUpdate(body);
  }
}
