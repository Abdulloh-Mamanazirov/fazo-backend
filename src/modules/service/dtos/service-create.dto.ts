import type { ServiceCreateRequest } from '../interfaces';
import { IsString, IsObject, IsNotEmpty, IsOptional } from 'class-validator';

export class ServiceCreateRequestDto implements ServiceCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsObject()
  @IsOptional()
  image: string;
}
