import type { VacancyDeleteRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class VacancyDeleteRequestDto implements VacancyDeleteRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
