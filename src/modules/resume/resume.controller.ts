import {
  Post,
  Body,
  Controller,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import path = require('path');
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ResumeService } from './resume.service';

const storage = {
  storage: diskStorage({
    destination: './uploads/resumes',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
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

  @Post('/send')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'file', maxCount: 1 }], storage),
  )
  async sendMessage(@Body() body, @UploadedFiles() files) {
    console.log(body);
    console.log(files);

    return;
  }
}
