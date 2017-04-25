const router = require('express').Router();
const db = require('../../db');

router.get('/albums/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.findById(id)
  .then(album => ( album ? res.json(album) : res.sendStatus(404)))
  .catch(next);
});


module.exports = router;
