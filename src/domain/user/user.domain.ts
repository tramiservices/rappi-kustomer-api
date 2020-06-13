import { User } from "../../models/user/user.model";
import { IUserDomain } from "./iuser.domain";
import { injectable } from "inversify";
import { IUserRepository } from "../../infrastructure/user/iuser.repository";
import { IUserHelper } from "./helper/iuser.helper";

/**
 * User domain
 */
@injectable()
export class UserDomain implements IUserDomain {

    /**
     * Creates an instance of user domain.
     * @param userRepository 
     * @param userHelper 
     */
    constructor(
        private userRepository: IUserRepository,
        private userHelper: IUserHelper
    ) { }

    /**
     * Gets users
     * @returns users 
     */
    public async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }

    /**
     * Gets user by id
     * @param id 
     * @returns user by id 
     */
    public async getUserById(id: number): Promise<User>{
        return await this.userRepository.getUserById(id);
    }

    /**
     * Posts user
     * @param user 
     * @returns user 
     */
    public async postUser(user: User): Promise<User> {
        const uservalues = this.userHelper.getuserValues(user);
        return await this.userRepository.postUser(uservalues)
    }

    /**
     * Puts user
     * @param user 
     * @returns user 
     */
    public async putUser(user: User): Promise<User> {
        const uservalues = this.userHelper.getuserValues(user);
        return await this.userRepository.putUser(uservalues)
    }
}
