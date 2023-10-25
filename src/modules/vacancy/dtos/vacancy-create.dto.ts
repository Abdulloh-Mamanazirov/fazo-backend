import type { VacancyCreateRequest } from '../interfaces';
import { IsDate, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class VacancyCreateRequestDto implements VacancyCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsDate()
  @IsOptional()
  endsAt: Date;
}
