import type { ProjectUpdateRequest } from '../interfaces';
import { Type } from 'class-transformer';
import { IsUUID, IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class ProjectUpdateIdDto implements Pick<ProjectUpdateRequest, 'id'> {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class ProjectUpdateRequestDto implements Omit<ProjectUpdateRequest, 'id'> {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  status?: number;

  @IsString()
  @IsOptional()
  link?: string;

  @IsUUID('4')
  @IsOptional()
  serviceId?: string;
}
