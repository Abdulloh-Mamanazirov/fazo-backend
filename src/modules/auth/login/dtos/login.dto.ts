import type { LoginRequest, LoginResponse } from '../interfaces';
import { IsJWT, IsString, IsNotEmpty } from 'class-validator';

export class LoginRequestDto implements LoginRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto implements LoginResponse {
  @IsJWT()
  @IsNotEmpty()
  token: string;
}
