const express = require('express');

const app = express();

const routes = require('./movies/router/index')

app.use(routes);

const port = 3200;

app.listen(port, ()=>{
    console.log('Corriendo en el puerto ', 3200)
})

