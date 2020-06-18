import { expect } from 'chai';
import * as faker from 'faker';
import { AppContainer } from '../container/app.container';
import { IUserDomain } from '../domain/user/iuser.domain';
import { User } from '../models/user/user.model';
import { UserController } from '../controllers/user/user.controller';

describe('UserController', () => {
  const userDomain = AppContainer.get<IUserDomain>(IUserDomain);
  const stubSingleValue = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  } as User;
  describe('getAllUsers', () => {
    it('should get all users from db', async () => {
      const userController = new UserController(userDomain);
      const users = await userController.getAllUsers();
      expect(typeof (users)).to.equal(typeof (Array<User>()));
    });
  });
  describe('getById', () => {
    it('should get an user by id from db', async () => {
      const userController = new UserController(userDomain);
      const user = await userController.getById(1);
      expect(typeof (user)).to.equal(typeof (stubSingleValue));
    });
  });
  describe('post', () => {
    it('should create a new user in db', async () => {
      const userController = new UserController(userDomain);
      const user = await userController.post(stubSingleValue);
      expect(typeof (user)).to.equal(typeof (stubSingleValue));
    });
  });
  describe('put', () => {
    it('should update a user in db', async () => {
      const userFake = { id: 1, firstname: faker.name.firstName(), lastname: faker.name.lastName() } as User;
      const userController = new UserController(userDomain);
      const user = await userController.put(userFake);
      expect(typeof (user)).to.equal(typeof (stubSingleValue));
    });
  });
})
