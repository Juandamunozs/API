const axios = require('axios');

const API = "https://rickandmortyapi.com/api/character/";

axios.get(API)
.then(peticion=>{
    const dato = peticion.data.results;
    console.log('La APi es: ', dato);
})
.catch(error=>{
    console.log('El error es: ', error);
})