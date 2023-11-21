import type { IProject, IResume, LengthRetrieveResponse } from '../interfaces';
import { Type } from 'class-transformer';
import {
  IsUUID,
  IsArray,
  IsNumber,
  IsObject,
  IsString,
  IsNotEmpty,
} from 'class-validator';

class ProjectStatsDto implements IProject {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  @IsNotEmpty()
  _count: {
    projects: number;
  };
}

class ResumeStatsDto implements IResume {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  @IsNotEmpty()
  _count: {
    resumes: number;
  };
}

export class LengthRetrieveResponseDto implements LengthRetrieveResponse {
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  services: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  projects: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  partners: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  vacancies: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  resumes: number;

  @IsArray()
  @IsNotEmpty()
  project_stats: ProjectStatsDto[];

  @IsArray()
  @IsNotEmpty()
  resume_stats: ResumeStatsDto[];
}
