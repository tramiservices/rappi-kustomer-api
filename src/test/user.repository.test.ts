import { expect } from 'chai';
import { describe } from 'mocha';
import { User } from '../models/user/user.model';
import { UserRepository } from '../infrastructure/user/user.repository';
import { UserHelper } from '../domain/user/helper/user.helper';
import { Enums } from '../config/messages/enums';
import * as faker from 'faker';


describe('UserRepository', () => {
  const stubValue = {
    id: 1,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  } as User
  describe("getUserById", () => {
    it("should get users by id from db", async () => {
      const userRepository = new UserRepository();
      const user = await userRepository.getUserById(1);
      expect(typeof (user)).to.equal(typeof (stubValue));
    })
  });
  describe("getUsers", () => {
    it("should get all users from db", async () => {
      const userRepository = new UserRepository();
      const users = await userRepository.getUsers();
      expect(typeof (users)).to.equal(typeof (Array<User>()));
    })
  });
  describe("postUser", () => {
    it("should create users into db", async () => {
      const userRepository = new UserRepository();
      const userHelper = new UserHelper();
      const values = userHelper.getuserValues(stubValue as User);
      const user = await userRepository.postUser(values.slice(1));
      expect(typeof (user)).to.equal(typeof (stubValue));
    })
  });
  describe("putUser", () => {
    it("should update user into db", async () => {
      const userRepository = new UserRepository();
      const userHelper = new UserHelper();
      const values = userHelper.getuserValues(stubValue as User);
      const user = await userRepository.putUser(values);
      expect(typeof (user)).to.equal(typeof (stubValue));
    })
  });
});
