const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
// http://localhost:3001/api/
router.use('thought', thoughtRoutes);
router.use('/users', userRoutes);
// http://localhost:3001/api/
module.exports = router;
