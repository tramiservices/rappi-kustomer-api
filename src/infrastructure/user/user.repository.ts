import { User } from '../../models/user/user.model';
import { injectable } from 'inversify';
import { IUserRepository } from './iuser.repository';
import { BaseRepository } from '../base/base.repository';
import { Enums } from '../../config/messages/enums';

/**
 * Injectable
**/
@injectable()
export class UserRepository extends BaseRepository<User> implements IUserRepository{
    /**
     * Constructor to UserRepository class
     */
    constructor() { 
        super();
    }


    /**
     * Get all users
     * @returns users
     */
    public async getUsers(): Promise<User[]> {
        return await this.getAll(Enums.FN_GET_USERS);
    }

    /**
     * Get user by id
     * @param id 
     * @returns user by id 
     */
    public async getUserById(id: number): Promise<User> {
        return await this.getById(Enums.FN_GET_USERS_BY_ID, id);
    }

    /**
     * Post user
     * @param values 
     * @returns user 
     */
    public async postUser(values:string[]): Promise<User>{
        return await this.post(Enums.FN_INSERT_USER,values);
    }

    /**
     * Put user
     * @param values 
     * @returns user 
     */
    public async putUser(values: string[]): Promise<User>{
        return await this.put(Enums.FN_UPDATE_USER,values)
    }
}