const chai = require('chai');
const expect = require('chai').expect;
const db = require('../../server/db');



describe('user Model', () => {
  const { attributes } = db.models.Users;

  it('Has fields as expected', () => {
    expect(attributes.userName).to.be.a('object');
    expect(attributes.firstName).to.be.a('object');
    expect(attributes.lastName).to.be.a('object');
    expect(attributes.email).to.be.a('object');
  });

  it('creating a user who exists', () => {
      it('the user will not get created', (done) => {
        db.models.User.create({ userName: 'summerguan'})
          .catch( (e)=> done());
      });
    });

  it('Saves user as expected', done => {
    db.models.Users
      .findAll()
      .then(results => {
        expect(results.length).to.equal(3);
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

// Reviews.belongsTo(Users, {through: 'userReview'} ) ;

// describe('associations', function(){

//      const Review = db.models.Reviews;
//      const User = db.models.Users;
//     /**
//      * Add a `belongsTo` relationship Reviews belongs to Album
//      */

//     it('review belongs to User', function() {

//       var creatingUser = User.create({ name: 'TestUser'});
//       var creatingReview = Review.create({
//         rating: '4',
//         title: 'Fake Title',
//         content: 'fake content'
//       });

//       return Promise.all([creatingUser, creatingReview])
//       .spread(function(createdUser, createdReview) {
//         // this method `setUser' method exsist automatically if association is set correctly
//         return createdReview.setUserReview(createdUser);
//       })
//       .then(function() {
//         return Review.findOne({
//           where: { title: 'Fake Title' },
//           include: { model: User, as: 'UserReview' }
//         });
//       })
//       .then(function(foundReview){
//         expect(foundReview.userId).to.exist; // eslint-disable-line no-unused-expressions
//         console.log(foundReview.UserReview);
//         expect(foundReview.UserReview.name).to.equal('TestUser');
//       });

//     });

//   });


//   return Users.getOrders([completedOrder, emptyCart])