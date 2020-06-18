import { expect } from 'chai';
import { describe } from 'mocha';
import { Auth } from '../models/auth/auth.model';
import { AuthRepository } from '../infrastructure/auth/auth.repository';
import * as faker from 'faker';
import { configuration } from '../config';


describe('AuthRepository', () => {
  const stubValue = {
    expiresIn: faker.random.number(),
    auth: faker.random.uuid(),
    message: faker.random.words()
  } as Auth
  describe("generateToken", () => {
    it("should be genarete auth model", async () => {
      const authRepository = new AuthRepository();
      const auth = await authRepository.generateToken('D4CD37FE-4BD6-954B-B188-0D5BE0BDCF0E');
      expect(typeof (auth)).to.equal(typeof (stubValue));
    })
  });
});
