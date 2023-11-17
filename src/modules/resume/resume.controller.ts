import {
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Controller,
  UploadedFile,
  UseInterceptors,
  UnprocessableEntityException,
} from '@nestjs/common';
import path = require('path');
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResumeService } from './resume.service';
import {
  ResumeDeleteRequestDto,
  ResumeRetrieveOneRequestDto,
  ResumeSendRequestDto,
} from './dtos';
import { Resume } from '@prisma/client';
import { TokenInterceptor } from '@interceptors';

const allowedExtensions = ['.pdf', '.doc', '.docx'];

const storage = {
  storage: diskStorage({
    destination: './uploads/resumes',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      if (!allowedExtensions.includes(extension)) {
        cb(
          new UnprocessableEntityException(
            'Invalid file extension. Allowed file types are: .pdf, .doc, .docx',
          ),
          null,
        );
      } else {
        cb(null, `${filename}${extension}`);
      }
    },
  }),
};

@Controller({
  path: '/resume',
  version: '1',
})
export class ResumeController {
  readonly #_service: ResumeService;
  constructor(service: ResumeService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async resumesRetrieveAll(): Promise<Resume[]> {
    return this.#_service.resumesRetrieveAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async resumeRetrieveOne(
    @Param() param: ResumeRetrieveOneRequestDto,
  ): Promise<Resume> {
    return this.#_service.resumeRetrieveOne(param);
  }

  @Post('/send')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('file', storage))
  async resumeSend(
    @Body() body: ResumeSendRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    body.resume = file.filename;
    return await this.#_service.resumeCreate(body);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async projectDelete(@Param() param: ResumeDeleteRequestDto): Promise<null> {
    return this.#_service.resumeDelete(param);
  }
}
