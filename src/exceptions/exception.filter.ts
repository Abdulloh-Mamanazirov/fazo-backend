import { Injectable, Catch } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'

@Injectable()
@Catch()
export class ExceptionFilter {
  catch(error: Error) {
    const httpException = new HttpException(error.message, 500)
    return httpException
  }
}
