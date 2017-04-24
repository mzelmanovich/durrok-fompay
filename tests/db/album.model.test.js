const { expect } = require('chai');
const db = require('../../server/db');

describe('Album Model', () => {
  const { attributes } = db.models.Albums;

  it('Has fields as expected', () => {
    expect(attributes.name).to.be.a('object');
    expect(attributes.year).to.be.a('object');
    expect(attributes.genre).to.be.a('object');
    expect(attributes.description).to.be.a('object');
    expect(attributes.imgURL).to.be.a('object');
  });

  it('Created as expected', done => {
  	db.models.Albums
      .findAll()
      .then(results => {
        expect(results.length).to.equal(2);
        expect(results[0].name).to.equal('Talkie Walkie');
        expect(results[0].year).to.equal('2004');
        expect(results[0].price * 1).to.be.equal(15);
        expect(results[0].imgURL).to.be.null;
        expect(results[1].genre).to.equal('Rock');
        expect(results[1].description).to.equal('Best album from Zoot Woman');
        expect(results[1].price).to.be.equal(15 * 1);
        expect(results[1].imgURL).to.be.null;
        done();
      })
      .catch(done);
  });
});
