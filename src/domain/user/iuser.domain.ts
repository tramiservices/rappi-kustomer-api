import { User } from "../../models/user/user.model";
import { injectable } from "inversify";

/**
 * Iuser domain
 */
@injectable()
export abstract class IUserDomain {
    abstract getUsers(): Promise<User[]>;
    abstract getUserById(id: number): Promise<User>;
    abstract postUser(user: User): Promise<User>;
    abstract putUser(user: User): Promise<User>;
}