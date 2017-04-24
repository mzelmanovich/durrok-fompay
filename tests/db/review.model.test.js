const { expect } = require('chai');
const db = require('../../server/db');

describe('review Model', () => {
  const { attributes } = db.models.Reviews;

  it('Has fields as expected', () => {
    expect(attributes.rating).to.be.a('object');
    expect(attributes.title).to.be.a('object');
    expect(attributes.content).to.be.a('object');
  });
  it('Saves review as expected', done => {
    db.models.Reviews
      .findAll()
      .then(results => {
        expect(results.length).to.equal(1);
        expect(results[0].rating).to.equal(5);
        expect(results[0].title).to.equal('Best Album Ever!')
        done();
      })
      .catch(done);
  });
    it('Has User association', () => {
    expect(attributes.userId).to.be.a('object');
  });
    it('Has Album association', () => {
    expect(attributes.albumId).to.be.a('object');
  });
      it('Has Song association', () => {
    expect(attributes.songId).to.be.a('object');
  });
});







