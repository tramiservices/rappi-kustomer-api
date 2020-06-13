import { injectable } from "inversify";
import { IAuthRepository } from "./iauth.repository";
import { Auth } from "../../models/auth/auth.model";
import { configuration } from "../../config";
import { sign } from 'jsonwebtoken';
import { app } from "../../app";
import { isNullOrUndefined } from "util";
import { Enums } from "../../config/messages/enums";

/**
 * AuthRepository class
 * @description Auth repository
 * @class AuthRepository
 * @implements IAuthRepository
 * @exports true
 */
@injectable()
export class AuthRepository implements IAuthRepository {

    private auth: Auth;
    /**
     * Constructor of AuthRepository
     */
    constructor() {
        this.auth = {
            expiresIn: 0,
            message: Enums.AUTHENTICATION_FAIL,
            auth: Enums.EMPTY_FIELD
        };
    }

    /**
     * Generates token
     * @param apikey 
     * @returns token 
     */
    public async generateToken(apikey: string): Promise<Auth> {
        if (!isNullOrUndefined(apikey) && apikey == configuration.apiKey) {
            const payload = {
                check: !isNullOrUndefined(apikey)
            }
            const token = sign(payload, app.app.get(Enums.API_KEY), {
                expiresIn: 3600,
                issuer: Enums.ISSUER
            });
            this.auth.expiresIn = 3600;
            this.auth.message = Enums.AUTHENTICATION_SUCCESS;
            this.auth.auth = token;
        }
        return this.auth;
    }
}