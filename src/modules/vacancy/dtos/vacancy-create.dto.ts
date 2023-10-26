import type { VacancyCreateRequest } from '../interfaces';
import { IsDate, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class VacancyCreateRequestDto implements VacancyCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsDate()
  @IsOptional()
  endsAt?: Date;
}
