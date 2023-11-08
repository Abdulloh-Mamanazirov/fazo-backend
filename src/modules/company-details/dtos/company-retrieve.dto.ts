import type { LengthRetrieveResponse } from '../interfaces';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';

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
}
