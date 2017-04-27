const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/app');

describe('/orders', () => {

  it('orders/ returns orders', (done) => {
    request(app).get('/api/orders')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.length).to.equal(2);
      done();
    })
    .catch(done);
  });

  it('orders/ post new order', (done) => {
    request(app).post('/api/orders')
    .send({
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(3);
      return request(app).get('/api/orders')
      .then((res) => {
        expect(res.body.length).to.equal(3);
        done();
      });
    })
    .catch(done);
  });

  it('orders/:id returns an order with ass', (done) => {
    request(app).get('/api/orders/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .then( ({body})  => {
      expect(body.id * 1).to.equal(1);
      expect(body.songs.length).to.equal(1);
      expect(body.albums.length).to.equal(1);
      expect(body.payment.id * 1).to.equal(1);
      expect(body.user.id * 1).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('orders/:id/songs can delete', (done) => {
    request(app).delete('/api/orders/1/songs')
    .send({id: 1})
    .expect(204)
    .then( () => {
      return request(app).get('/api/orders/1')
      .then(({body}) => {
        expect(body.songs.length).to.equal(0);
        done();
      });
    })
    .catch(done);
  });

  it('orders/:id/songs can add song', (done) => {
    request(app).put('/api/orders/1/songs')
    .send({id: 2})
    .expect(204)
    .then( () => {
      return request(app).get('/api/orders/1')
      .then(({body}) => {
        expect(body.songs.length).to.equal(2);
        done();
      });
    })
    .catch(done);
  });

  it('orders/:id/payment can changes payment', (done) => {
    request(app).put('/api/orders/1/payment')
    .send({id: 2})
    .expect(204)
    .then( () => {
      return request(app).get('/api/orders/1')
      .then(({body}) => {
        expect(body.payment.id * 1).to.equal(2);
        done();
      });
    })
    .catch(done);
  });

  it('orders/:id/albums can album', (done) => {
    request(app).delete('/api/orders/1/albums')
    .send({id: 1})
    .expect(204)
    .then( () => {
      return request(app).get('/api/orders/1')
      .then(({body}) => {
        expect(body.albums.length).to.equal(0);
        done();
      });
    })
    .catch(done);
  });

  it('orders/:id/albums can add album', (done) => {
    request(app).put('/api/orders/1/albums')
    .send({id: 2})
    .expect(204)
    .then( () => {
      return request(app).get('/api/orders/1')
      .then(({body}) => {
        expect(body.albums.length).to.equal(2);
        done();
      });
    })
    .catch(done);
  });
});
