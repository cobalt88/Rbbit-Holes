const router = require('express').Router();

const error = require('./error');
const userRoutes = require('./user');
const adminRoutes = require('./admin');


router.use('/', userRoutes);
router.use('/admin', adminRoutes)


module.exports = router;