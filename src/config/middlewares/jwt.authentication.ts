import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { configuration } from '../../config';
import { injectable } from 'inversify';
import { MiddlewareAsync, HttpStatusCode } from 'dinoloop';
import { ApiResponse } from '../../models/config/response.model';
import { Enums } from '../messages/enums';

/**
 * JwtAuthentication class
 * @description Authenticated middleware
 */
@injectable()
export class JwtAuthentication extends MiddlewareAsync {

  /**
   * Invokes jwt authentication
   * @param request 
   * @param response 
   * @param next 
   */
  async invoke(request: Request, response: Response, next: NextFunction) {
    const token = request.headers[Enums.ACCESS_TOKEN];
    if (token) {
      verify(token as string, configuration.apiKey as string, (err: any) => {
        if (!err) {
          next();
        }
      });
    } else {
      response.statusCode = HttpStatusCode.unauthorized;
      response.send(this.buildApiResponse());
    }
  }

 /**
  * Builds api response
  * @returns api response 
  */
 private buildApiResponse(): ApiResponse<string> {
    return {
      isSuccess: false,
      mesagge: Enums.FAIL,
      statusCode: HttpStatusCode.unauthorized,
      data: Enums.UNAUTHORIZED
    } as ApiResponse<string>;
  }
}