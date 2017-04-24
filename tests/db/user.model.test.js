const { expect } = require('chai');
const db = require('../../server/db');

describe('user Model', () => {
  const { attributes } = db.models.Users;

  it('Has fields as expected', () => {
    expect(attributes.userName).to.be.a('object');
    expect(attributes.firstName).to.be.a('object');
    expect(attributes.lastName).to.be.a('object');
    expect(attributes.email).to.be.a('object');
  });

  it('Saves user as expected', done => {
    db.models.Users
      .findAll()
      .then(results => {
        expect(results.length).to.equal(1);
        expect(results[0].userName).to.equal('summerguan');
        expect(results[0].firstName).to.equal('Summer');
        expect(results[0].lastName).to.equal('Guan');
        expect(results[0].email).to.equal('summergun10@gmail.com');
        expect(results[0].salt).to.equal('1234');
        done();
      })
      .catch(done);
  });
});
