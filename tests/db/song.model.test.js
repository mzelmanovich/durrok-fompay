const {expect} = require('chai');
const db = require('../../server/db');

describe('Song Model', () => {
  const {attributes} = db.models.Songs;

  it('Has fields as expected', () => {
    expect(attributes.name).to.be.a('object');
    expect(attributes.year).to.be.a('object');
    expect(attributes.duration).to.be.a('object');
    expect(attributes.price).to.be.a('object');
    expect(attributes.description).to.be.a('object');
  });

});
