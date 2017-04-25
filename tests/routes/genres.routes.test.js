const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/genres', () => {

  it('genres/:id returns an genre', (done) => {
    request(app).get('/api/genres/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('genres/:id returns 404', (done) => {
    request(app).get('/api/genres/10')
    .expect(404)
    .then(() => {
      done();
    })
    .catch(done);
  });
});