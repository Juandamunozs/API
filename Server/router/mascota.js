
const express = require('express');
const router = express.Router();

//console.log('Estoy en mascotas.... por lo menos ya se rutas');

router.get('/', (req, res) => {
    res.send('Estoy en mascotas.... por lo menos ya se rutas');
});

module.exports = router;