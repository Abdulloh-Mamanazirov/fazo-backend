import type { VacancyCreateRequest } from '../interfaces';
import { IsDate, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class VacancyCreateRequestDto implements VacancyCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  require: string;

  @IsString()
  @IsNotEmpty()
  offer: string;

  @IsString()
  @IsNotEmpty()
  days: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  salary: string;

  @IsDate()
  @IsOptional()
  endsAt?: Date;
}
