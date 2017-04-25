const { expect } = require('chai');
const db = require('../../server/db');

describe('Database Objects', function() {
  beforeEach(done => {
    db.seed(true).then(() => done()).catch(done);
  });

  afterEach(done => {
    db.seed(true).then(() => done()).catch(done);
  });

  describe('Database Connection', () => {
    it('Can connect to db', done => {
      db.sync(true).then(() => done()).catch(done);
    });
  });

  require('./order.model.test');
  require('./user.model.test');
  require('./artist.model.test');
  require('./review.model.test');
  require('./genre.model.test');
  require('./album.model.test');
  require('./song.model.test');
  require('./payment.model.test');

});
