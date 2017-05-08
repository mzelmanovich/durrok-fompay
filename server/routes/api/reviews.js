const router = require('express').Router();
const db = require('../../db');
const Albums = db.models.Albums;
const User = db.models.Users;

router.param('albumId', (req, res, next, albumId) => {
  Albums.findById(albumId)
  .then(foundAlbums => {
    req.albums = foundAlbums;
    next();
  })
  .catch(next);
})

// GET /api/reviews/ - gets all the reviews
router.get('/reviews', (req, res, next) => {
  db.models.Reviews.findAll()
    .then( reviews => (reviews ? res.send(reviews).json() : res.sendStatus(404)))
    .catch(next);
});

//Get all reviews for a single album
// router.get('/:albumId', (req, res, next) => {
//   console.log(req.params);
//   db.models.Reviews.findAll({where:{albumid: req.params.albumId}, include:[User] })
//   .then(reviewsArr => {res.send(reviewsArr)})
//      .then(console.log('hello summer'))
//   .catch(next);
// });

// GET /api/reviews/:reviewId - gets a single review

router.get('/reviews/:id', (req, res, next) => {
  const id = req.params.id;
  db.models.Reviews.findById(id,{include:[{all:true}]})
  .then(review => ( review ? res.send(review).json() : res.sendStatus(404)))
  .catch(next);
});


// POST - /api/reviews/ - posts a new review
router.post('/', (req, res, next) => {
  if (req.isAuthenticated()){
    return db.models.Reviews.create({
      content: req.body.content,
      rating: req.body.rating,
      albumId: req.body.albumId,
      userId: req.user.id
    })
	.then((newReview) => {
  res.status(201).json(newReview);
})
	.catch(next);
  }
  return res.sendStatus(403);
});


module.exports = router;
