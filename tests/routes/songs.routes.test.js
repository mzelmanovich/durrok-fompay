const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/songs', () => {

  it('songs/:id returns an song', (done) => {
    request(app).get('/api/songs/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id returns 404', (done) => {
    request(app).get('/api/songs/10')
    .expect(404)
    .then(() => {
      done();
    })
    .catch(done);
  });

  it('songs/:id/artist returns an artist', (done) => {
    request(app).get('/api/songs/1/artist')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      console.log(body)
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id/artist returns 404', (done) => {
    request(app).get('/api/songs/10/artist')
    .expect(404)
    .then(() => {
      done();
    })
    .catch(done);
  });
});