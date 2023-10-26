import type { CompanyCreateRequest } from '../interfaces';
import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CompanyCreateRequestDto implements CompanyCreateRequest {
  @IsString()
  @IsNotEmpty()
  about: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phone: string;
}
