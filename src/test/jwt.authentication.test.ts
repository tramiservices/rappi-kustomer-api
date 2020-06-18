import { HttpStatusCode } from 'dinoloop';
import { JwtAuthentication } from '../config/middlewares/jwt.authentication';
import { expect } from 'chai';
import { request } from 'http';
import * as faker from 'faker';
import { ApiResponse } from '../models/config/response.model';

describe('JwtAuthentication', () => {
  const stubValue = {
    data: faker.random.words(),
    isSuccess: faker.random.boolean(),
    mesagge: faker.random.words(),
    statusCode: faker.random.number()
  } as ApiResponse<string>
  const options = {
    host: 'localhost',
    port: 5555,
    path: '/api/users'
  };
  describe('invoke', () => {
    it('should call a get all endpoint and return success response', async () => {
      options.path += '/generatetoken/1';
      let requestResult = request(options);
      requestResult.end();
      requestResult.on('response', (response) => {
        expect('Content-Type', 'application/json');
        expect(response.statusCode).to.equal(HttpStatusCode.oK);
      });
    });
  });
  describe('buildApiResponse', () => {
    it('should be return an api response model', async () => {
      const jwtAuthentication = new JwtAuthentication();
      const apiResponse = jwtAuthentication.buildApiResponse();
      expect(typeof(apiResponse)).to.be.equal(typeof(stubValue));
    });
  })
})