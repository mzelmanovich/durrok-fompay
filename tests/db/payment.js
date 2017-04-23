const { expect } = require('chai');
const db = require('../../server/db');

describe('user Model', () => {

  it('Saves user as expected', done => {
    db.models.Payments
      .findAll()
      .then(results => {
        expect(results.length).to.equal(2);
        expect(results[0].cardType).to.equal('mastercard');
        expect(results[0].creditCardNumber * 1).to.equal(123456789);
        expect(results[0].expDate).to.equal(new Date('01/01/2017'));
        expect(results[1].cardType).to.equal('visa');
        expect(results[1].creditCardNumber * 1).to.equal(123456);
        expect(results[1].expDate).to.equal(new Date('01/01/2016'));
        done();
      })
      .catch(done);
  });
});
