import { Auth } from "../../models/auth/auth.model";
import { injectable } from "inversify";

/**
 * Injectable
 */
@injectable()
export abstract class IAuthRepository{
    abstract generateToken(apikey: string): Promise<Auth>;
}