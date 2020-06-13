import { injectable } from 'inversify';
import { RequestEndMiddlewareAsync } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';
import { Enums } from '../messages/enums';


/**
 * Injectable Json Response
 * @description default response in http responses API
 */
@injectable()
export class JsonResponse<T> extends RequestEndMiddlewareAsync {

    /**
     * Invokes json response
     * @param request 
     * @param response 
     * @param next 
     * @param result 
     */
    async invoke(request: Request, response: Response, next: NextFunction, result: Promise<T>) {
        response.json({
            isSuccess: response.statusCode == 200,
            mesagge: response.statusCode == 200 ? Enums.SUCCESS: Enums.FAIL,
            statusCode: response.statusCode,
            data: await result
        });
    }


}