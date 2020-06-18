import { expect } from 'chai';
import { describe } from 'mocha';
import { Auth } from '../models/auth/auth.model';
import * as faker from 'faker';
import { AppContainer } from '../container/app.container';
import { IAuthDomain } from '../domain/auth/iauth.domain';
import { AuthController } from '../controllers/auth/auth.controller';

describe('AuthController', () => {
  const iAuthDomain = AppContainer.get<IAuthDomain>(IAuthDomain);
  const stubValue = {
    expiresIn: faker.random.number(),
    auth: faker.random.uuid(),
    message: faker.random.words()
  } as Auth;
  describe("get", () => {
    it("should be genarete auth model", async () => {
      const authCntroller = new AuthController(iAuthDomain);
      const auth = await authCntroller.get(faker.random.uuid());
      expect(typeof (auth)).to.equal(typeof (stubValue));
    });
  });
});