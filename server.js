const express = require('express');
const router = require('./movies/router/index');

const app = express();

const port = 3200;

app.get('/', (req, res)=>{
    res.send('Servidor levantado')
})

app.use('/api', router);

app.listen(port, ()=>{
   console.log('Servidor levantado en el puerto ', port);
})