const { expect } = require('chai');
const db = require('../../server/db');

describe('Routes', function() {
  beforeEach(done => {
    db.seed(true).then(() => done()).catch(done);
  });

  afterEach(done => {
    db.seed(true).then(() => done()).catch(done);
  });

  describe('api', () => {
    require('./albums.routes.test');
    require('./genres.routes.test');
    require('./songs.routes.test');
    require('./artists.routes.test');
    require('./orders.routes.test');
  });
});
