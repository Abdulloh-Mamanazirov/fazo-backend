import type { LinksUpdateRequest } from '../interfaces';
import { IsString, IsOptional } from 'class-validator';

export class LinksUpdateRequestDto implements LinksUpdateRequest {
  @IsString()
  @IsOptional()
  facebook?: string;
  
  @IsString()
  @IsOptional()
  instagram?: string;
  
  @IsString()
  @IsOptional()
  telegram?: string;
  
  @IsString()
  @IsOptional()
  linkedIn?: string;
  
  @IsString()
  @IsOptional()
  github?: string;
}
