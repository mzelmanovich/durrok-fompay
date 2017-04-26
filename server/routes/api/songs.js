const router = require('express').Router();
const db = require('../../db');

router.get('/songs/:id/artist', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	if(!song){
  		res.sendStatus(404)
  	}
  	else{
  		const newSong= song.get();
  		return db.models.Artists.findById(newSong.artistId)
  	}
  })
  .then(artist =>res.json(artist))
  .catch(next);
});

router.get('/songs/:id', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song =>{
  	if(!song){
  		res.sendStatus(404)
  	}
  	res.json(song)
  })
  .catch(next);
});



module.exports = router;