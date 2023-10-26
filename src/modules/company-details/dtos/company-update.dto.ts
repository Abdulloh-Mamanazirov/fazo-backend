import type { CompanyUpdateRequest } from '../interfaces';
import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class CompanyUpdateRequestDto implements CompanyUpdateRequest {
  @IsString()
  @IsOptional()
  about?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsPhoneNumber('UZ')
  @IsOptional()
  phone?: string;
}
