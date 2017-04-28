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
      return db.models.Artists.findById(newSong.artistId || 0);
    }
  })
  .then(artist => artist ? res.json(artist) : res.json(null))
  .catch(next);
});

router.put('/songs/:id/artist', (req, res, next) => {
  const artist = req.body.id;
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setArtist(artist);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.delete('/songs/:id/artist', (req, res, next) => {
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setArtist(null);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.get('/songs/:id/genres', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	if (!song){
  		res.sendStatus(404);
  	}
  	else {
  		const newSong = song.get();
  		return db.models.Genres.findAll({where: {id: newSong.genreId}});
  	}
  })
  .then(reviews => res.json(reviews))
  .catch(next);
});

router.put('/songs/:id/genres', (req, res, next) => {
  const genre = req.body.id;
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setGenre(genre);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.delete('/songs/:id/genres', (req, res, next) => {
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setGenre(null);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.get('/songs/:id/album', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	if (!song){
  		res.sendStatus(404);
  	}
  	else {
  		const newSong = song.get();
  		return db.models.Albums.findById(newSong.albumId);
  	}
  })
  .then(album => res.json(album))
  .catch(next);
});

router.put('/songs/:id/albums', (req, res, next) => {
  const album = req.body.id;
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setAlbums(album);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.delete('/songs/:id/albums', (req, res, next) => {
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return song.setAlbums(null);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
});

router.get('/songs/:id/reviews', (req, res, next) => {
  db.models.Songs.findById(req.params.id)
  .then(song => {
  	if (!song){
  		res.sendStatus(404);
  	}
  	else {
  		const newSong = song.get();
  		return db.models.Reviews.findAll({where: {songId: newSong.id}});
  	}
  })
  .then(reviews => res.json(reviews))
  .catch(next);
});

router.post('/songs/:id/reviews', (req, res, next) => {
  const review = req.body.id;
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return db.models.Reviews.create(req.body)
  		.then(review => song.addReviews(review))
  		.then(() => res.sendStatus(201));
  	})
  	.catch(next);
});

router.delete('/songs/:id/reviews', (req, res, next) => {
  	db.models.Songs.findById(req.params.id)
  	.then(song => {
  		if (!song){
  			res.sendStatus(404);
  		}
  		return db.models.Reviews.destroy({where: {songId: req.params.id}});
  	})
  	.then(() => res.sendStatus(204))
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

router.delete('/songs/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Songs.destroy({where: {id}})
  	.then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))
  	.catch(next);
});


module.exports = router;
