import { injectable } from "inversify";
import { Auth } from "../../models/auth/auth.model";

/**
 * Injectable
 */
@injectable()
export abstract class IAuthDomain {
    abstract generateToken(apikey: string): Promise<Auth>;
}