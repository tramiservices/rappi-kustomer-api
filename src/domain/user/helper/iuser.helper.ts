import { injectable } from "inversify";
import { User } from "../../../models/user/user.model";

/**
 * Injectable
 */
@injectable()
export abstract class IUserHelper {
    abstract getuserValues(user: User): string[];
}