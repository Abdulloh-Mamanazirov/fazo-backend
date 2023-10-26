import type { Company } from '@prisma/client';
import { TokenInterceptor } from '@interceptors';
import {
  Get,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
  Controller,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyCreateRequestDto, CompanyUpdateRequestDto } from './dtos';

@Controller({
  path: '/company-details',
  version: '1',
})
export class CompanyController {
  readonly #_service: CompanyService;
  constructor(service: CompanyService) {
    this.#_service = service;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async companyRetrieveAll(): Promise<Company[]> {
    return this.#_service.companyRetrieveAll();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  async companyCreate(@Body() body: CompanyCreateRequestDto): Promise<null> {
    return this.#_service.companyCreate(body);
  }

  @Patch('/update')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async companyUpdate(@Body() body: CompanyUpdateRequestDto): Promise<null> {
    return this.#_service.companyUpdate(body);
  }

  @Delete('/delete')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async companyDelete(): Promise<null> {
    return this.#_service.companyDelete();
  }
}
