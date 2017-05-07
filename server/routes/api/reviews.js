const router = require('express').Router();
const db = require('../../db');

// GET /api/reviews/ - gets all the reviews
router.get('/reviews', (req, res, next) => {
  db.models.Reviews.findAll()
    .then( reviews => (reviews ? res.send(reviews).json() : res.sendStatus(404)))
    .catch(next);
});

//GET /api/reviews/:reviewId - gets a single review
router.get('/reviews/:id', (req, res, next) => {
  const id = req.params.id;
  db.models.Reviews.findById(id)
  .then(review => ( review ? res.send(review).json() : res.sendStatus(404)))
  .catch(next);
});


// POST - /api/reviews/ - posts a new review
router.post('/', (req, res, next) => {
  if (req.isAuthenticate()){
    db.models.Reviews.create({
      content: req.body.content,
      rating: req.body.rating,
      title: req.body.title,
      albumId: req.body.albumId,
      userId: req.user.id
    })
	.then((newReview) => {
  res.status(201).json(newReview);
})
	.catch(next);
  }
});


module.exports = router;
