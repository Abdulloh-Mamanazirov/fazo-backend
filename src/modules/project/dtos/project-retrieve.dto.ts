import type {
  ProjectRetrieveOneRequest,
  ProjectsRetrieveRequest,
} from '../interfaces';
import { Type } from 'class-transformer';
import { IsUUID, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class ProjectRetrieveOneRequestDto implements ProjectRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class ProjectsRetrieveRequestDto implements ProjectsRetrieveRequest {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  offset?: number;
}
