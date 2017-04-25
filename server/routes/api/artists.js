const router = require('express').Router();
const db = require('../../db');

router.get('/artists/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Artists.findbyId(id)
  .then(artist => (artist ? res.json(artist) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;
