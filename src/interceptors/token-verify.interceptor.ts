import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
  ForbiddenException,
  BadRequestException,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    const token = request?.headers?.authorization

    if (!token) {
      throw new ForbiddenException('Please, Provide Token!')
    }

    try {
      const { admin, exp } = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString(),
      )

      if (!admin) {
        throw new BadRequestException('Invalid Token!')
      }

      if (exp - Math.floor(Date.now() / 1000) < 0) {
        throw new UnauthorizedException('Token expired!')
      }
    } catch (error) {
      throw new NotAcceptableException('Token is not acceptable!')
    }

    return next.handle()
  }
}
