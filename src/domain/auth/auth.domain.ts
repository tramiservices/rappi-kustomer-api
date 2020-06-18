import { injectable } from "inversify";
import { IAuthDomain } from "./iauth.domain";
import { Auth } from "../../models/auth/auth.model";
import { IAuthRepository } from "../../infrastructure/auth/iauth.repository";

/**
 * Auth domain
 */
@injectable()
export class AuthDomain implements IAuthDomain {

    /**
     * Creates an instance of auth domain.
     * @param userRepository 
     */
    constructor(private _authRepository: IAuthRepository) { }

    /**
     * Generates token
     * @param apikey 
     * @returns auth 
     */
    public async generateToken(apikey: string): Promise<Auth> {
        return await this._authRepository.generateToken(apikey);
    }
}