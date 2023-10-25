import type { ServiceDeleteRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class ServiceDeleteRequestDto implements ServiceDeleteRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
