const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');
const server = request(app);

describe('/albums', () => {

  it('can find via id (albums/:id', (done) => {
    server.get('/albums/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end( ({body}) => {
      expect(body.id * 1).to.equal(1);
      done();
    });
  });

  it('returns 404', (done) => {
    server.get('/albums/10')
    .expect('Content-Type', /json/)
    .expect(404)
    .end( () => {
      done();
    });
  });
});
