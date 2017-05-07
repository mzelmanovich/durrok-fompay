const router = require('express').Router();
const db = require('../../db');


router.get('/users/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Users.findById(id, {attributes: ['userName']})
  .then(({userName}) => (  userName.length ? res.json([userName]) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;
