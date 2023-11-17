import { IsNotEmpty, IsUUID } from 'class-validator';
import { ResumeDeleteRequest } from '../interfaces';

export class ResumeDeleteRequestDto implements ResumeDeleteRequest {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
