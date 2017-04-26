const { expect } = require('chai');
const db = require('../../server/db');

describe('Song Model', () => {
  const { attributes } = db.models.Songs;

  it('Has fields as expected', () => {
    expect(attributes.name).to.be.a('object');
    expect(attributes.year).to.be.a('object');
    expect(attributes.duration).to.be.a('object');
    expect(attributes.price).to.be.a('object');
    expect(attributes.imgURL).to.be.a('object');
  });

  it('Created as expected', done => {
  	db.models.Songs
      .findAll()
      .then(results => {
        expect(results.length).to.equal(2);
        expect(results[1].name).to.equal('Calmer');
        expect(results[1].year).to.equal('2004');
        expect(results[1].imgURL).to.be.null;
        expect(results[0].duration).to.equal(244);
        expect(results[0].price * 1).to.equal(1.99);
        expect(results[0].imgURL).to.be.null;
        done();
      })
      .catch(done);
  });

});
