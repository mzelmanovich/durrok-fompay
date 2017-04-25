const router = require('express').Router();
const albumRoutes = require('./albums');

router.use('/', albumRoutes);

module.exports = router;
