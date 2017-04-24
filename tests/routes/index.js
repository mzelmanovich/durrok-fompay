const { expect } = require('chai');
const db = require('../../server/db');

describe('Routes', function() {
  beforeEach(done => {
    console.log(1);
    db.seed(true).then(() => done()).catch(done);
  });

  afterEach(done => {
    console.log(2);
    db.seed(true).then(() => done()).catch(done);
  });

  describe('api', () => {
    require('./albums.routes.test');
  });
});
