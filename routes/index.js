const router = require('express').Router();
const apiRoutes = require('./api');
// const thoughtRoutes = require('./thought-routes');

router.use('/api', apiRoutes);

module.exports = router;