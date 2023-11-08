import type { PartnersRetrieveRequest } from '../interfaces';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PartnersRetrieveRequestDto implements PartnersRetrieveRequest {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number;
}
