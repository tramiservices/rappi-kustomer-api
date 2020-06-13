import { injectable } from "inversify";
import { Controller, ApiController, HttpGet } from "dinoloop";
import { Auth } from "../../models/auth/auth.model";
import { IAuthDomain } from "../../domain/auth/iauth.domain";

/**
 * Auth controller
 */
@injectable()
@Controller('/auth')
export class AuthController extends ApiController {

    /**
     * Creates an instance of auth controller.
     * @param _authDomain Interface of authDomain
     */
    constructor(private _authDomain: IAuthDomain) {
        super();
    }
    
    /**
     * Https get
     * @param apiKey 
     * @returns auth 
     */
    @HttpGet('/generatetoken/:apiKey')
    async get(apiKey: string): Promise<Auth> {
        const auth = await this._authDomain.generateToken(apiKey);
        return auth;
    }
}