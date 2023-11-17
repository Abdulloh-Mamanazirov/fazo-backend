import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
import type { ResumeSendRequest } from '../interfaces';

export class ResumeSendRequestDto implements ResumeSendRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  about: string;

  @IsString()
  @IsOptional()
  resume: string;

  @IsUUID()
  @IsNotEmpty()
  vacancy_id: string;
}
