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

router.put('/users/me/cart', (req, res, next) => {
  const {albumId} = req.body;
  if (!req.user){
    return res.json({});
  }
  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then((user) => user.refreshCart(albumId))
  .then((cart) => ( cart ? res.json(cart) : res.json({})))
  .catch(next);
});

router.delete('/users/me/cart', (req, res, next) => {
  const {albumId} = req.body;
  if (!req.user){
    return res.json({});
  }
  console.log(albumId);
  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then((user) => user.cart.removeAlbum(albumId))
  .then((cart) => ( cart ? res.json(cart) : res.json({})))
  .catch(next);
});


router.get('/users/me/cart', (req, res, next) => {
  if (!req.user){
    return res.json({});
  }
  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then(({cart}) => {
    return cart ? db.models.Orders.findById(cart.id || 0, {include: [{all: true}]}) : {};
  })
  .then((cart) => ( cart ? res.json(cart) : res.json({})))
  .catch(next);
});

router.post('/users/me/checkout', (req, res, next) => {
  if (!req.user){
    return res.json({});
  }
  db.models.Users.findById(req.user.id, {include: [{all: true}]})
  .then((user) => user.completeCart())
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
