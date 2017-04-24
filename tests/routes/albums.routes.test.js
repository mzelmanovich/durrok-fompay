const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/albums', () => {

  it('albums/:id returns an album', (done) => {
    request(app).get('/api/albums/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('albums/:id returns 404', (done) => {
    request(app).get('api/albums/10')
    .expect(404)
    .then(() => {
      done();
    })
    .catch(done);
  });
});
