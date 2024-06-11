const express = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.send("Activo")
})

const port = 3200;

app.listen(port, ()=>{
    console.log('Corriendo en el puerto ', 3200)
})