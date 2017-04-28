const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/songs', () => {

  it('songs/:id/artist returns an artist', (done) => {
    request(app).get('/api/songs/1/artist')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id/artist updates an artist', (done) => {
    request(app).put('/api/songs/1/artist')
    .send({id:2})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/songs/1/artist')
      .then(({body}) => {
        expect(body.lastName).to.equal('Timberlake');
        done();
      });
    })
    .catch(done);
  });

  it('songs/:id/artist deletes an artist', (done) => {
    request(app).delete('/api/songs/1/artist')
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/songs/1/artist')
      .then(({body}) => {
        expect(body).to.equal(null);
        done();
      });
    })
    .catch(done);
  });

  it('songs/:id/genres returns genres', (done) => {
    request(app).get('/api/songs/1/genres')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body[0].id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id/genres updates a genre', (done) => {
    request(app).put('/api/songs/1/genres')
    .send({id:2})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/songs/1/genres')
      .then(({body}) => {
        expect(body[0].name).to.equal('Pop Music');
        done();
      });
    })
    .catch(done);
  });

  it('songs/:id/genres deletes a genre', (done) => {
    request(app).delete('/api/songs/1/genres')
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/songs/1/genres')
      .then(({body}) => {
        expect(body.length).to.equal(0);
        done();
      });
    })
    .catch(done);
  });

  it('songs/:id/albums returns albums', (done) => {
    request(app).get('/api/songs/1/albums')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id/reviews returns reviews', (done) => {
    request(app).get('/api/songs/1/reviews')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body[0].id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('songs/:id/reviews post a review', (done) => {
    request(app).post('/api/songs/1/reviews')
    .send({
      rating: '3', 
      title: 'ok!', 
      content:'Whatever'}) 
    .expect(201)
    .then( ()  => {
      return request(app).get('/api/songs/1/reviews')
      .then(({body}) => {
        expect(body.length).to.equal(2);
        done();
      });
    })
    .catch(done);
  });

  it('songs/:id/reviews deletes a review', (done) => {
    request(app).delete('/api/songs/1/reviews')
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/songs/1/reviews')
      .then(({body}) => {
        expect(body.length).to.equal(0);
        done();
      });
    })
    .catch(done);
  });

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


});