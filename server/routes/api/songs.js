const router = require('express').Router();
const db = require('../../db');

router.get('/song/:id', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	console.log(song);
  	if(!song){
  		res.sendStatus(404)
  	}
  	res.json(song)
  })
  .catch(next);
});

router.get('/song/:id/artist', (req, res, next) => 
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	console.log(song);
  	db.models.Artists.findById(song.artistId)
  })
  .then(artist=>( artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;