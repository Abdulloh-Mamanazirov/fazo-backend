import type { ServiceRetrieveOneRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class ServiceRetrieveOneRequestDto implements ServiceRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
