import { User } from "../../models/user/user.model";
import { injectable } from "inversify";

/**
 * Injectable
 */
@injectable()
export abstract class IUserRepository{
    abstract getUsers(): Promise<User[]>;
    abstract getUserById(id: number): Promise<User>;
    abstract postUser(values: string[]): Promise<User>;
    abstract putUser(values: string[]): Promise<User>;
}