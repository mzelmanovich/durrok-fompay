const router = require('express').Router();
const db = require('../../db');

router.get('/orders/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Orders.findById(id, {include: [{all: true}]})
  .then(order => ( order ? res.json(order) : res.sendStatus(404)))
  .catch(next);
});

router.post('/orders', (req, res, next) => {
  const ord = req.body;
  db.models.Orders.create(ord)
  .then(order => ( order ? res.status(201).json(order) : res.sendStatus(404)))
  .catch(next);
});

router.get('/orders', (req, res, next) => {
  db.models.Orders.findAll()
  .then(orders => ( orders ? res.json(orders) : res.sendStatus(404)))
  .catch(next);
});

router.put('/orders/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Orders.findById(id)
  .then(order => {
    if (!order){
      return res.sendStatus(404);
    }
    return order.addSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.delete('/orders/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Orders.findById(id)
  .then(order => {
    if (!order){
      return res.sendStatus(404);
    }
    return order.removeSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.put('/orders/:id/albums', (req, res, next) => {
  const {id} = req.params;
  const alb = req.body.id;
  db.models.Orders.findById(id)
  .then(order => {
    if (!order){
      return res.sendStatus(404);
    }
    return order.addAlbum(alb)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.delete('/orders/:id/albums', (req, res, next) => {
  const {id} = req.params;
  const alb = req.body.id;
  db.models.Orders.findById(id)
  .then(order => {
    if (!order){
      return res.sendStatus(404);
    }
    return order.removeAlbum(alb)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

router.put('/orders/:id/payment', (req, res, next) => {
  const {id} = req.params;
  const pay = req.body.id;
  db.models.Orders.findById(id)
  .then(order => {
    if (!order){
      return res.sendStatus(404);
    }
    return order.setPayment(pay)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

module.exports = router;
