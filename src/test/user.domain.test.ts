import { expect } from 'chai';
import { describe } from 'mocha';
import * as faker from 'faker';
import { AppContainer } from '../container/app.container';
import { IUserRepository } from '../infrastructure/user/iuser.repository';
import { User } from '../models/user/user.model';
import { UserDomain } from '../domain/user/user.domain';
import { IUserHelper } from '../domain/user/helper/iuser.helper';

describe('UserDomain', () => {
  const stubValue = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  };
  const iUserRepository = AppContainer.get<IUserRepository>(IUserRepository);
  const iUserHelper = AppContainer.get<IUserHelper>(IUserHelper);
  describe("getUsers", () => {
    it("should be get all users from db", async () => {
      const userDomain = new UserDomain(iUserRepository, iUserHelper);
      const user = await userDomain.getUsers();
      expect(typeof (user)).to.equal(typeof (stubValue));
    });
  });
  describe("getUserById", () => {
    it("should be get user by id from db", async () => {
      const userDomain = new UserDomain(iUserRepository, iUserHelper);
      const user = await userDomain.getUserById(1);
      expect(typeof (user)).to.equal(typeof (stubValue));
    });
  });
  describe("postUser", () => {
    it("should be create a new user in db", async () => {
      const userDomain = new UserDomain(iUserRepository, iUserHelper);
      const user = await userDomain.postUser(stubValue as User);
      expect(typeof (user)).to.equal(typeof (stubValue));
    });
  });
  describe("putUser", () => {
    it("should be update user in db", async () => {
      const userDomain = new UserDomain(iUserRepository, iUserHelper);
      const user = await userDomain.putUser({ id: 1, firstname: faker.name.firstName(), lastname: faker.name.lastName() } as User);
      expect(typeof (user)).to.equal(typeof (stubValue));
    });
  });
});