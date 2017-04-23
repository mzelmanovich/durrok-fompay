const { expect } = require('chai');
const db = require('../../server/db');

describe('Payment Model', () => {

  it('Saves Payment as expected', done => {
    db.models.Payments
      .findAll()
      .then(results => {
        expect(results.length).to.equal(2);
        expect(results[0].cardType).to.equal('mastercard');
        expect(results[0].creditCardNumber * 1).to.equal(123456789);
        expect(results[0].expDate.toString()).to.equal((new Date('01/01/2017')).toString());
        expect(results[0].name).to.equal('Fake 123');
        expect(results[1].cardType).to.equal('visa');
        expect(results[1].creditCardNumber * 1).to.equal(123456);
        expect(results[1].expDate.toString()).to.equal((new Date('01/01/2016')).toString());
        expect(results[1].name).to.equal('Faker 123');
        done();
      })
      .catch(done);
  });
});
