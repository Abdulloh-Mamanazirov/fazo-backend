import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LOGIN } from './constants';
import type { LoginRequest, LoginResponse } from './interfaces';

@Injectable()
export class LoginService {
  readonly #_jwtService: JwtService;
  constructor(jwtService: JwtService) {
    this.#_jwtService = jwtService;
  }

  async login(payload: LoginRequest): Promise<LoginResponse> {
    if (
      payload.username === LOGIN.username &&
      payload.password === LOGIN.password
    ) {
      return {
        token: await this.#_jwtService.signAsync({ admin: true }),
      };
    } else {
      throw new BadRequestException("Username or password is incorrect!")
    }
  }
}
