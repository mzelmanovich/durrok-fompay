const { expect } = require('chai');
const db = require('../../server/db');

describe('artist Model', () => {
  const { attributes } = db.models.Artists;

  it('Has fields as expected', () => {
    expect(attributes.firstName).to.be.a('object');
    expect(attributes.lastName).to.be.a('object');
    expect(attributes.imgURL).to.be.a('object');
  });

  it('Saves artist as expected', done => {
    db.models.Artists
      .findAll()
      .then(results => {
        expect(results.length).to.equal(2);
        expect(results[0].firstName).to.equal('Nsync');
        expect(results[0].lastName).to.be.null;
        expect(results[0].imgURL).to.equal('test.jpg');
        done();
      })
      .catch(done);
  });
});
