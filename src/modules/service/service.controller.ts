import type { Service } from '@prisma/client';
import path = require('path');
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TokenInterceptor } from '@interceptors';
import { ServiceService } from './service.service';
import {
  ServiceUpdateIdDto,
  ServiceDeleteRequestDto,
  ServiceUpdateRequestDto,
  ServiceCreateRequestDto,
  ServiceRetrieveOneRequestDto,
} from './dtos';

const storage = {
  storage: diskStorage({
    destination: './uploads/services',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller({
  path: '/services',
  version: '1',
})
@UseInterceptors(TokenInterceptor)
export class ServiceController {
  readonly #_service: ServiceService;
  constructor(service: ServiceService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async servicesRetrieveAll(): Promise<Service[]> {
    return this.#_service.servicesRetrieveAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async servicesRetrieveOne(
    @Param('id') param: ServiceRetrieveOneRequestDto,
  ): Promise<Service> {
    return this.#_service.servicesRetrieveOne(param);
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
  )
  async serviceCreate(
    @Body() body: ServiceCreateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files.image[0].filename;
    return this.#_service.serviceCreate(body);
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
  )
  async serviceUpdate(
    @Param() param: ServiceUpdateIdDto,
    @Body() body: ServiceUpdateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files?.image?.[0]?.filename;
    return this.#_service.serviceUpdate({ ...param, ...body });
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  async serviceDelete(@Param() param: ServiceDeleteRequestDto): Promise<null> {
    return this.#_service.serviceDelete(param);
  }
}
