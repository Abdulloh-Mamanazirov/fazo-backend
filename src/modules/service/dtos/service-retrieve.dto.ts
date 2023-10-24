import type {
  ServicesRetrieveRequest,
  ServiceRetrieveOneRequest,
  ServiceRetrieveProjectsRequest,
} from '../interfaces';
import { Type } from 'class-transformer';
import { IsUUID, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class ServiceRetrieveOneRequestDto implements ServiceRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class ServicesRetrieveRequestDto implements ServicesRetrieveRequest {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  offset?: number;
}

export class ServiceRetrieveProjectsRequestDto
  implements ServiceRetrieveProjectsRequest
{
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
