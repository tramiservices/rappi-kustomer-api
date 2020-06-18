import { expect } from 'chai';
import { describe } from 'mocha';
import { DbContext, db } from '../infrastructure/dbcontext/db.context';
import { Pool, PoolClient} from 'pg';


describe('DbContext', () => {
  describe("init", () => {
    it("should initialize a connection to db", async () => {
      const dbContext = new DbContext();
      const poolClient = await dbContext.init();
      expect(typeof (poolClient)).to.equal(typeof (db.pool));
    })
  });
});
