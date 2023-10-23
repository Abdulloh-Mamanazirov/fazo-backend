import type { ProjectRetrieveOneRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class ProjectRetrieveOneRequestDto implements ProjectRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
