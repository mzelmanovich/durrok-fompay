const {expect} = require('chai');
const db = require('../../server/db');

  describe('user Model', () => {
    const {attributes} = db.models.User;

    it('Has fields as expected', () => {
        expect(attributes.userName).to.be.a('object');
      expect(attributes.firstName).to.be.a('object');
      expect(attributes.lastName).to.be.a('object');
      expect(attributes.email).to.be.a('object');
 
    });
     });