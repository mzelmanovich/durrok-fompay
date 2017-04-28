const router = require('express').Router();
const db = require('../../db');
const Genre = db.models.Genres;


//GET REQUEST-list all genres
router.get('/genres', (req, res, next) => {
  Genre.findAll({ order: 'name'})
    .then( genres => (genres ? res.send(genres).json() : res.sendStatus(404)))
    .catch(next);
});

//GET REQUEST-get info for an individual genre
router.get('/genres/:id', (req, res, next) => {
  const id = req.params.id;
  Genre.findById(id)
  .then(genre => ( genre ? res.send(genre).json() : res.sendStatus(404)))
  .catch(next);
});

//GET REQUEST--get albums under 1 specifc genre

router.get('/genres/:id/albums',  (req, res, next) => {
  var id = req.params.id;
  Genre.findById(id, {include: {all: true}})
  .then( genre => genre ? res.send(genre.albums).json() : res.sendStatus(404) )
  .catch(next);
});

router.get('/genres/:id/songs',  (req, res, next) => {
  var id = req.params.id;
  Genre.findById(id, {include: {all: true}})
  .then( genre => genre ? res.send(genre.songs).json() : res.sendStatus(404) )
  .catch(next);
});


//add a new genre (admin user)
router.post('/genres', (req, res, next) =>
		Genre.create(req.body)
		.then(newGenre => res.status(201).json(newGenre))
		.catch(next));


// edit the genre (admin only)
router.put('/genres/:id', (req, res, next) => {
  var {id} = req.params;
  Genre.findById(id)
		.then(genre => genre.update(req.body))
		.then(newGenre => res.send(newGenre))
		.catch(next);
});


// delete a genre (admin only)
router.delete('/genres/:id', (req, res, next) => {
  var id = req.params.id;
  Genre.findById(id)
		.then(genre => genre.destroy({where: {id}}))
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;

