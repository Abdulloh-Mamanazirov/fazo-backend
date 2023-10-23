import type { PartnerUpdateRequest } from '../interfaces';
import { IsString, IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

export class PartnerUpdateRequestIdDto
  implements Pick<PartnerUpdateRequest, 'id'>
{
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class PartnerUpdateRequestDto
  implements Omit<PartnerUpdateRequest, 'id'>
{
  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  name?: string;
}
