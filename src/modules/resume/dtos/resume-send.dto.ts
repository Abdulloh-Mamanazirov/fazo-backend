import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsJSON,
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
  @IsOptional()
  vacancy_id: string;
}

