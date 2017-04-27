const router = require('express').Router();
const db = require('../../db');

router.get('/artists/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findbyId(id)
  .then(artist => (artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

router.delete('/artists/:id', (req, res, next) => {
    const {id} = req.params;
    db.models.Artists.destroy({where: {id}})
    .then(check => (check ? res.sendStatus(204) : res.sendStatus(404)))
    .catch(next);
  });

router.get('/artists', (req, res, next) => {
  db.models.Artists.findAll()
  .then(artists => (artists ? res.json(artists) : res.sendStatus(404)))
  .catch(next);
})

router.post('/artists', (req, res, next) => {
  const artist = req.body;
  db.models.Artists.create(artist)
  .then(artist => ( artist ? res.status(201).json(artist) ? res.sendStatus(404)))
  .catch(next)
})

router.get('/artists/:id/songs', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findbyId(id)
  .then(artist => ( res.json(artist.songs) : res.sendStatus(404)))
  .catch(next);
})

router.put('/artists/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Artists.findbyId(id)
  .then(artist => {
    if(!artist){
      return res.sendStatus(404);
    }
    return artist.setSong(song)
    .then(() => res.sendStatus(204));
  })
})

router.delete('/artists/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Artists.findById(id)
  .then(artist => {
    if (!artist){
      return res.sendStatus(404);
    }
    return artist.removeSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
})

router.get('/artists/:id/albums', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findbyId(id)
  .then(artist => ( res.json(artist.albums) : res.sendStatus(404)))
  .catch(next);
})

router.put('/artists/:id/albums', (req, res, next) => {
  const {id} = req.params;
  const album = req.body.id;
  db.models.Artists.findbyId(id)
  .then(artist => {
    if(!artist){
      return res.sendStatus(404);
    }
    return artist.setAlbum(album)
    .then(() => res.sendStatus(204));
  })
})

router.delete('/artists/:id/albums', (req, res, next) => {
  const {id} = req.params;
  const album = req.body.id;
  db.models.Artists.findById(id)
  .then(artist => {
    if (!artist){
      return res.sendStatus(404);
    }
    return artist.removeAlbum(album)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
})

module.exports = router;
