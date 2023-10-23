import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginRequestDto, LoginResponseDto } from './dtos';

@Controller({
  path: 'auth',
  version: '1',
})
export class LoginController {
  readonly #_service: LoginService;
  constructor(service: LoginService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.#_service.login(body);
  }
}
