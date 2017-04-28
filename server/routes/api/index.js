const router = require('express').Router();
const albumRoutes = require('./albums');
const genreRoutes = require('./genres');
const songRoutes = require('./songs');
const orderRoutes = require('./orders');
const artistRoutes = require('./artists');

router.use('/', albumRoutes);
router.use('/', genreRoutes);
router.use('/', songRoutes);
router.use('/', artistRoutes);
router.use('/', orderRoutes);

module.exports = router;
