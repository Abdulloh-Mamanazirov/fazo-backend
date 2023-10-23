import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SECRET_KEY } from './constants';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
