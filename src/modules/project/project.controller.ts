import type { Project } from '@prisma/client';
import path = require('path');
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  Get,
  Put,
  Post,
  Body,
  Query,
  Param,
  Delete,
  HttpCode,
  Controller,
  HttpStatus,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TokenInterceptor } from '@interceptors';
import { ProjectService } from './project.service';
import { PAGINATION } from './constants';
import {
  ProjectUpdateIdDto,
  ProjectDeleteRequestDto,
  ProjectUpdateRequestDto,
  ProjectCreateRequestDto,
  ProjectRetrieveOneRequestDto,
  ProjectsRetrieveRequestDto,
} from './dtos';

const storage = {
  storage: diskStorage({
    destination: './uploads/projects',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller({
  path: '/projects',
  version: '1',
})
@UseInterceptors(TokenInterceptor)
export class ProjectController {
  readonly #_service: ProjectService;
  constructor(service: ProjectService) {
    this.#_service = service;
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async projectsRetrieveAll(
    @Query() query: ProjectsRetrieveRequestDto,
  ): Promise<Project[]> {
    query.offset = query.offset ?? PAGINATION.offset;
    query.take = query.take ?? PAGINATION.take;
    return this.#_service.projectsRetrieveAll(query);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async projectRetrieveOne(
    @Param('id') param: ProjectRetrieveOneRequestDto,
  ): Promise<Project> {
    return this.#_service.projectRetrieveOne(param);
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
  )
  async projectCreate(
    @Body() body: ProjectCreateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files.image[0].filename;
    return this.#_service.projectCreate(body);
  }

  @Put('/update/:id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], storage),
  )
  async projectUpdate(
    @Param() param: ProjectUpdateIdDto,
    @Body() body: ProjectUpdateRequestDto,
    @UploadedFiles() files,
  ): Promise<null> {
    body.image = files?.image?.[0]?.filename;
    return this.#_service.projectUpdate({ ...param, ...body });
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  async projectDelete(@Param() param: ProjectDeleteRequestDto): Promise<null> {
    return this.#_service.projectDelete(param);
  }
}
