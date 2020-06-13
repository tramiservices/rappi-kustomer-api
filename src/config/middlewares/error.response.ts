import { ErrorMiddlewareAsync } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '../../helpers/logger';
import { injectable } from 'inversify';


/**
 * Injectable
 * @description Error middleware
 */
@injectable()
export class ErrorResponse extends ErrorMiddlewareAsync {

    /**
     * Invokes error response
     * @param err 
     * @param request 
     * @param response 
     * @param next 
     * @returns invoke 
     */
    async invoke(err: Error, request: Request, response: Response, next: NextFunction): Promise<void> {
        // handle it
        if(err instanceof ErrorResponse) {
            Logger.log(err);
            //Valido error
            response.json('InvalidRequest');
        } else {
            // pass on to next error middleware
            next(err);
        }
    }
}