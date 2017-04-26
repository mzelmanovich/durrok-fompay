const router = require('express').Router();
const albumRoutes = require('./albums');
const genreRoutes = require('./genres');
const songRoutes = require('./songs')

router.use('/', albumRoutes);
router.use('/', genreRoutes);
router.use('/', songRoutes);

module.exports = router;
