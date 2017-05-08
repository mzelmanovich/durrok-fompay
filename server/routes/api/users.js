const router = require('express').Router();
const db = require('../../db');


router.get('/users/me', (req, res, next) => {
  if (!req.user){
    return res.json({});
  }

  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then((user) => ( user ? res.json(user) : res.json({})))
  .catch(next);
});

router.post('/users/me/cart', (req, res, next) => {
  if (!req.user){
    return res.json({});
  }
  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then((user) => user.refreshCart(req.body))
  .then((cart) => ( cart ? res.json(cart) : res.json({})))
  .catch(next);
});

router.get('/users/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Users.findById(id, {attributes: ['firstName', 'lastName']})
  .then((name) => ( name ? res.json(name) : res.sendStatus(404)))
  .catch(next);
});


module.exports = router;
