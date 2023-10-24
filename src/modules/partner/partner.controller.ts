import type { Partner } from '@prisma/client';
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
import { PartnerService } from './partner.service';
import {
  PartnerUpdateRequestIdDto,
  PartnerDeleteRequestDto,
  PartnerUpdateRequestDto,
  PartnerCreateRequestDto,
} from './dtos';

const storage = {
  storage: diskStorage({
    destination: './uploads/partners',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller({
  path: '/partners',
  version: '1',
})
export class PartnerController {
  readonly #_service: PartnerService;
  constructor(service: PartnerService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async partnersRetrieveAll(): Promise<Partner[]> {
    return this.#_service.partnersRetrieveAll();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
    TokenInterceptor,
  )
  async partnerCreate(
    @Body() body: PartnerCreateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files.image[0].filename;
    return this.#_service.partnerCreate(body);
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
    TokenInterceptor,
  )
  async partnerUpdate(
    @Param() param: PartnerUpdateRequestIdDto,
    @Body() body: PartnerUpdateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files?.image?.[0]?.filename;
    return this.#_service.partnerUpdate({ ...param, ...body });
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async partnerDelete(@Param() param: PartnerDeleteRequestDto): Promise<null> {
    return this.#_service.partnerDelete(param);
  }
}
