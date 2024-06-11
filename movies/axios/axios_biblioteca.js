const API = "https://rickandmortyapi.com/api/character/";

axios.get(API)
.then(respuesta=>{
    const dato = respuesta.data.results;
    console.log('Los datos son: ', dato)
})
.catch(error=>{
    console.log('Error en ', error);
})