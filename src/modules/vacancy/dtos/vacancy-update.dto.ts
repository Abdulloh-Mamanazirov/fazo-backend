import type { VacancyUpdateRequest } from '../interfaces';
import { IsUUID, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class VacancyUpdateIdDto implements Pick<VacancyUpdateRequest, 'id'> {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class VacancyUpdateRequestDto implements Omit<VacancyUpdateRequest, 'id'> {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString()
  @IsOptional()
  endsAt?: string;
}
