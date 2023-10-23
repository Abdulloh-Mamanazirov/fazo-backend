import type { PartnerDeleteRequest } from '../interfaces';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class PartnerDeleteRequestDto implements PartnerDeleteRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
