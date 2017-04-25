const router = require('express').Router();
const albumRoutes = require('./albums');
const genreRoutes = require('./genres');

router.use('/', albumRoutes);
router.use('/', genreRoutes);

module.exports = router;
