const router = require('express').Router();
const db = require('../../db');

router.get('/songs/:id/artist', (req, res, next) => 
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	db.models.Artists.findById(song.artistId)
  })
  .then(artist=>( artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

router.get('/songs/:id', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => ( song ? res.json(song) : res.sendStatus(404)))
  .catch(next);
});



module.exports = router;