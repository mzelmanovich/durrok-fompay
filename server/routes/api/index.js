const router = require('express').Router();
const albumRoutes = require('./albums');
const genreRoutes = require('./genres');
const songRoutes = require('./songs');
const orderRoutes = require('./orders');
const artistRoutes = require('./artists');
const reviewRoutes = require('./reviews');

router.use('/', albumRoutes);
router.use('/', genreRoutes);
router.use('/', songRoutes);
router.use('/', artistRoutes);
router.use('/', orderRoutes);
router.use('/', reviewRoutes);

module.exports = router;
