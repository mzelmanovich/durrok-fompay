const { expect } = require('chai');
const db = require('../../server/db');

describe('genre Model', () => {
  const { attributes } = db.models.Genres;

  it('Has fields as expected', () => {
    expect(attributes.name).to.be.a('object');
  });

  it('Saves genre as expected', done => {
    db.models.Genres
      .findAll()
      .then(results => {
        expect(results.length).to.equal(3);
        expect(results[0].name).to.equal('Jazz');
        done();
      })
      .catch(done);
  });
});
