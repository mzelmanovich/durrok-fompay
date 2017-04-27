const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/genres routes test', () => {
    it('/genres GET REQUEST list all genres', () => {
			request(app)
			.get('/api/genres')
			.expect(200)
			.then(res => {
				expect(res.body).to.be.an('array');
				expect(res.body.length).to.be.equal(0);
			}) 
		});

  it('genres/:id GET REQUEST-get info for an individual genre', (done) => {
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

  it('genres/:id/albums GET REQUEST albums under 1 specifc genre', (done) => {
    request(app).get('/api/genres/1/albums')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.length).to.equal(1)
      done();
    })
    .catch(done);
  });

   it('/genres POST REQUEST add a new genre', (done) => {
    request(app).post('/api/genres')
    .send({
      name: 'POST ROCK'
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(4);
      return request(app).get('/api/genres')
      .then((res) => {
        expect(res.body.length).to.equal(4);
        done();
      });
    })
    .catch(done);
  });

  // it('/genres/id PUT REQUEST edit the genre', (done) => {
  //   request(app).put('/api/genres/1')
  //   .send({id: 2})
  //   .then( ()  => {
  //     return request(app).get('/api/genres/1')
  //     .then(({body}) => {
  //       expect(body.name).to.equal('Pop Music');
  //       done();
  //     });
  //   })
  //   .catch(done);
  // });

    it('genres/:id DELETE delete a genre', (done) => {
    request(app).delete('/api/genres/1')
    .send({id: 2})
    .expect(204)
    .then( ()  => {
      return request(app).get('/api/genres')
      .then(({body}) => {
        expect(body.length).to.equal(2);
        done();
      });
    })
    .catch(done);
  });

});



