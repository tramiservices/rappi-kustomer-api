import { HttpStatusCode } from 'dinoloop';
import { expect } from 'chai';
import { request } from 'http';

describe('JsonResponse', () => {
  const options = {
    host: 'localhost',
    port: 5555,
    path: '/api/auth'
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
  })
})
