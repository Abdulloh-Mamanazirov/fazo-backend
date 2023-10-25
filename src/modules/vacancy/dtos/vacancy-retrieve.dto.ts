import type { VacancyRetrieveOneRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class VacancyRetrieveOneRequestDto implements VacancyRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
