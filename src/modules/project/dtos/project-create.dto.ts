import type { ProjectCreateRequest } from '../interfaces';
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class ProjectCreateRequestDto implements ProjectCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(()=>Number)
  status: number;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsUUID('4')
  @IsNotEmpty()
  serviceId: string;
}
