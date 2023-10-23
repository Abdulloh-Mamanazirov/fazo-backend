import type { PartnerCreateRequest } from '../interfaces';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PartnerCreateRequestDto
  implements PartnerCreateRequest
{
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
