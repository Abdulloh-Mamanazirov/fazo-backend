import type { LinksCreateRequest } from '../interfaces';
import { IsString, IsNotEmpty } from 'class-validator';

export class LinksCreateRequestDto implements LinksCreateRequest {
  @IsString()
  @IsNotEmpty()
  facebook: string;

  @IsString()
  @IsNotEmpty()
  instagram: string;

  @IsString()
  @IsNotEmpty()
  telegram: string;

  @IsString()
  @IsNotEmpty()
  linkedIn: string;

  @IsString()
  @IsNotEmpty()
  github: string;
}
