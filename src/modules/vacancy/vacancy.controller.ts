import type { Vacancies } from '@prisma/client';
import { TokenInterceptor } from '@interceptors';
import { VacancyService } from './vacancy.service';
import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Controller,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import {
  VacancyUpdateIdDto,
  VacancyDeleteRequestDto,
  VacancyUpdateRequestDto,
  VacancyCreateRequestDto,
  VacancyRetrieveOneRequestDto,
} from './dtos';

@Controller({
  path: '/vacancies',
  version: '1',
})
export class VacancyController {
  readonly #_service: VacancyService;
  constructor(service: VacancyService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async vacanciesRetrieveAll(): Promise<Vacancies[]> {
    return this.#_service.vacanciesRetrieveAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async vacancyRetrieveOne(
    @Param() param: VacancyRetrieveOneRequestDto,
  ): Promise<Vacancies> {
    return this.#_service.vacancyRetrieveOne(param);
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  async vacancyCreate(@Body() body: VacancyCreateRequestDto): Promise<null> {
    return this.#_service.vacancyCreate(body);
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async vacancyUpdate(
    @Param() param: VacancyUpdateIdDto,
    @Body() body: VacancyUpdateRequestDto,
  ): Promise<null> {
    return this.#_service.vacancyUpdate({ ...param, ...body });
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async vacancyDelete(@Param() param: VacancyDeleteRequestDto): Promise<null> {
    return this.#_service.vacancyDelete(param);
  }
}
