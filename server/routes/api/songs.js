const router = require('express').Router();
const db = require('../../db');

router.get('/songs/:id/artist', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
    if (!song){
      res.sendStatus(404);
      return false;
    }
    else {
      const newSong = song.get();
      return db.models.Artists.findById(newSong.artistId);
    }
  })
  .then(artist => artist ? res.json(artist) : null)
  .catch(next);
});

router.get('/songs/:id', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
    if (!song){
      return res.sendStatus(404);
    }
    return res.json(song);
  })
  .catch(next);
});


module.exports = router;
