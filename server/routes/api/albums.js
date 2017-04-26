const router = require('express').Router();
const db = require('../../db');

router.get('/albums/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.findById(id)
  .then(album => ( album ? res.json(album) : res.sendStatus(404)))
  .catch(next);
});

router.delete('/albums/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.destroy({where: {id}})
  .then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))
  .catch(next);
});

router.get('/albums/:id/songs', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.findById(id, {include: [{all: true}]})
  .then(album => ( album ? res.json(album.songs) : res.sendStatus(404)))
  .catch(next);
});

router.put('/albums/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Albums.findById(id)
  .then(album => {
    if (!album){
      return res.sendStatus(404);
    }
    return album.addSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.delete('/albums/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body;
  db.models.Albums.findById(id)
  .then(album => {
    if (!album){
      return res.sendStatus(404);
    }
    return album.removeSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.get('/albums/:id/genre', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.findById(id, {include: [{all: true}]})
  .then(album => ( album ? res.json(album.genre) : res.sendStatus(404)))
  .catch(next);
});

router.get('/albums/:id/artist', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.findById(id, {include: [{all: true}]})
  .then(album => ( album ? res.json(album.artist) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;
