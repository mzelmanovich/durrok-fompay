const router = require('express').Router();
const db = require('../../db');

router.get('/song/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Songs.findById(id)
  .then(song => ( song ? res.json(song) : res.sendStatus(404)))
  .catch(next);
});

router.get('/song/:id/artist', (req, res, next) => {
  const {id} = req.params;
  db.models.Songs.findById(id)
  .then(song => {
  	db.models.Artists.findById(song.artistId)
  })
  .then(artist=>( artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;