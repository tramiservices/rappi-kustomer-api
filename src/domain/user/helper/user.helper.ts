import { injectable } from "inversify";
import { IUserHelper } from "./iuser.helper";
import { User } from "../../../models/user/user.model";

/**
 * Injectable
 */
@injectable()
export class UserHelper implements IUserHelper {

   /**
    * Gets post values
    * @param user 
    * @returns post values in string array
    */
   public getuserValues(user: User): string[]{
        const userValues: string[] = Object.values(user);
        return userValues;
    }
}
