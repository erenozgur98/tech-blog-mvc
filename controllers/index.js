const router = require('express').Router();

const homeRoutes = require('./home-routes');

const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);

module.exports = router;