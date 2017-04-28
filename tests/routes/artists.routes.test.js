const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/artists', () => {
  it('/artists GET-return all artists', (done) => {
    request(app)
			.get('/api/artists')
			.expect(200)
			.then(res => {
  expect(res.body).to.be.an('array');
  expect(res.body.length).to.be.equal(2);
  done();
})
      .catch(done);
  });

  it('artists/:id GET-returns an artist', (done) => {
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

  it('artists/:id DELETE delete an artist', (done) => {
    request(app).delete('/api/artists/1')
    .send({id: 2})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/artists')
      .then(({body}) => {
        expect(body.length).to.equal(1);
        done();
      });
    })
    .catch(done);
  });

  it('/artists POST-add a new artist', (done) => {
    request(app).post('/api/artists')
    .send({
      firstName: 'Britney'
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(3);
      return request(app).get('/api/artists')
      .then((res) => {
        expect(res.body.length).to.equal(3);
        done();
      });
    })
    .catch(done);
  });

  it('artists/:id/songs GET-get the song under one artist', (done) => {
    request(app).get('/api/artists/1/songs')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.length).to.equal(1);
      done();
    })
    .catch(done);
  });

    it.only('artists/:id/songs add the song under 1 artist', (done) => {
    request(app).put('/api/artists/1/songs')
    .send({id: 2})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/artists/1/songs')
      .then(({body}) => {
        expect(body[1].id).to.equal(2);
        done();
      });
    })
    .catch(done);
  });

  it('artists/:id/songs DELETE-remove song under artist', (done) => {
    request(app).delete('/api/artists/1/songs')
    .send({id: 1})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/artists/1/songs')
      .then(({body}) => {
        expect(body.length).to.equal(0);
        done();
      });
    })
    .catch(done);
  });


  it('artists/:id/albums GET--returns albums under artist', (done) => {
    request(app).get('/api/artists/1/albums')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body[0].name).to.equal('Talkie Walkie');
      done();
    })
    .catch(done);
  });


