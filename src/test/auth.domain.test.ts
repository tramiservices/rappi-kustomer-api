import { expect } from 'chai';
import { describe, beforeEach } from 'mocha';
import { Auth } from '../models/auth/auth.model';
import { AuthDomain } from '../domain/auth/auth.domain';
import { IAuthRepository } from '../infrastructure/auth/iauth.repository';
import * as faker from 'faker';
import { AppContainer } from '../container/app.container';

describe('AuthDomain', () => {
  const stubValue = {
    expiresIn: faker.random.number(),
    auth: faker.random.uuid(),
    message: faker.random.words()
  } as Auth;
  const iAuthRepository = AppContainer.get<IAuthRepository>(IAuthRepository);
  describe("generateToken", () => {
    it("should be genarete auth model", async () => {
      const authDomain = new AuthDomain(iAuthRepository);
      const auth = await authDomain.generateToken(faker.random.uuid());
      expect(typeof (auth)).to.equal(typeof (stubValue));
    });
  });
});