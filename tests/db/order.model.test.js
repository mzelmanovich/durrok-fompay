 const { expect } = require('chai');
 const db = require('../../server/db');

 describe('Order Model', () => {
   const { attributes } = db.models.Orders;

   it('Has fields as expected', () => {
     expect(attributes.completedDate).to.be.a('object');
     expect(attributes.orderPrice).to.be.a('object');
     expect(attributes.tax).to.be.a('object');
   });

   it('Saves data as expected', done => {
     db.models.Orders
        .findAll()
        .then(results => {
          expect(results.length).to.equal(2);
          expect(results[0].orderPrice).to.equal('1.99');
          expect(results[0].tax).to.equal(`${1.99 * 0.07}`);
          expect(results[0].completedDate).to.be.an.instanceOf(Date);
          expect(results[1].orderPrice).to.be.null;
          expect(results[1].tax).to.be.null;
          expect(results[1].completedDate).to.be.null;
          done();
        })
        .catch(done);
   });
 });
