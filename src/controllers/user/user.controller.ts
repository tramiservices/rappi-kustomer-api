import { ApiController, Controller, HttpGet, HttpPost, HttpPut } from 'dinoloop'
import { User } from "../../models/user/user.model";
import { IUserDomain } from '../../domain/user/iuser.domain';
import { injectable } from 'inversify';
import { JwtAuthentication } from '../../config/middlewares/jwt.authentication';
import { Logger } from '../../helpers/logger';

/**
 * User controller
 */
@injectable()
@Controller('/users')
// @Controller('/users', { middlewares: [JwtAuthentication] })
export class UserController extends ApiController {

    /**
     * Constructor of UserController class
     */
    constructor(private _userDomain: IUserDomain) {
        super();
    }

    /**
     * Get all users
     * @returns users 
     */
    @HttpGet('/getall')
    async getAllUsers(): Promise<User[]> {
        const users = await this._userDomain.getUsers();
        return users;
    }

    /**
     * Get user by ID
     * @param id 
     * @returns user 
     */
    @HttpGet('/get/:id')
    async getById(id: number): Promise<User> {
        const user = await this._userDomain.getUserById(id);
        return user;
    }

    /**
     * Post user
     * @param user 
     * @returns user 
     */
    @HttpPost('/create')
    async post(user: User): Promise<User> {
        const userCreated = await this._userDomain.postUser(user);
        return userCreated;
    }

    /**
     * Put user
     * @param user 
     * @returns user 
     */
    @HttpPut('/update')
    async put(user: User): Promise<User> {
        const userUpdate = await this._userDomain.putUser(user);
        return userUpdate;
    }
}