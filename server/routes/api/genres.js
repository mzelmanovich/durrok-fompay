const router = require('express').Router();
const db = require('../../db');

router.get('/genres/:id', (req, res, next) => {
  const id = req.params.id;
  db.models.Genres.findById(id)
  .then(genre => ( genre ? res.send(genre).json() : res.sendStatus(404)))
  .catch(next);
});


module.exports = router;


