import { IsNotEmpty, IsUUID } from 'class-validator';
import { ResumeRetrieveOneRequest } from '../interfaces';

export class ResumeRetrieveOneRequestDto implements ResumeRetrieveOneRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
