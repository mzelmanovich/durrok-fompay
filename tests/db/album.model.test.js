const {expect} = require('chai');
const db = require('../../server/db');

describe('Album Model', () => {
  const {attributes} = db.models.Albums;

  it('Has fields as expected', () => {
    expect(attributes.name).to.be.a('object');
    expect(attributes.year).to.be.a('object');
    expect(attributes.genre).to.be.a('object');
  });

});
