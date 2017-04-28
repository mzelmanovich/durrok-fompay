const router = require('express').Router();
const db = require('../../db');

//return all artists
router.get('/artists', (req, res, next) => {
  db.models.Artists.findAll()
  .then(artists => (artists ? res.json(artists) : res.sendStatus(404)))
  .catch(next);
});


//return a specific artist
router.get('/artists/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findById(id)
  .then(artist => (artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

//delete a specific artist
router.delete('/artists/:id', (req, res, next) => {
    const {id} = req.params;
    db.models.Artists.destroy({where: {id}})
    .then(check => (check ? res.sendStatus(204) : res.sendStatus(404)))
    .catch(next);
  });

//add a new artist
router.post('/artists', (req, res, next) => {
  // const artist = req.body;
  db.models.Artists.create(req.body)
  .then(artist => ( artist ? res.status(201).json(artist) : res.sendStatus(404)))
  .catch(next);
});

//get the song under one artist
router.get('/artists/:id/songs', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findById(id, {include: [{all: true }]})
  .then(artist => artist ? res.send(artist.songs).json() : res.sendStatus(404))
  .catch(next);
});


//add the song under one artist
router.put('/artists/:id/songs', (req, res, next) => {

  const {id} = req.params;
  const song = req.body.id;
  db.models.Artists.findById(id)
  .then(artist => {
    if(!artist){
      return res.sendStatus(404);
    }
    return artist.addSong(song)
    .then(() => res.sendStatus(204));
  })
});

//delete the song under one artist
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
});

//get the albums from the artist
router.get('/artists/:id/albums', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findById(id, {include:[{all:true}]})
  .then(artist => ( artist ? res.json(artist.albums) : res.sendStatus(404)))
  .catch(next);
});


//update the albums  under the artist
router.put('/artists/:id/albums', (req, res, next) => {
  const {id} = req.params;
  const album = req.body.id;
  db.models.Artists.findById(id)
  .then(artist => {
    if(!artist){
      return res.sendStatus(404);
    }
    return artist.setAlbum(album)
    .then(() => res.sendStatus(204));
  })
});


//delete the albums under the artist
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
