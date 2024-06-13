const router = require('express').Router();

const route_mascota = require('./mascota');

router.use('/mascota', route_mascota);

module.exports = router;