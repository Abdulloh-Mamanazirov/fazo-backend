import type { ServiceUpdateRequest } from '../interfaces';
import { IsUUID, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ServiceUpdateIdDto implements Pick<ServiceUpdateRequest, 'id'> {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class ServiceUpdateRequestDto implements Omit<ServiceUpdateRequest, 'id'> {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString()
  @IsOptional()
  image?: string;
}
