const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/artists', () => {

  it('artists/:id returns an genre', (done) => {
    request(app).get('/api/artists/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('artists/:id returns 404', (done) => {
    request(app).get('/api/artists/10')
    .expect(404)
    .then(() => {
      done();
    })
    .catch(done);
  });
});
