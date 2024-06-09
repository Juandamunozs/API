const API = "https://https://rickandmortyapi.com/api/characters/";

fetch(API)
.then(peticion=>{
    return peticion.json();
})
.then(data =>{
    const dato = data.results;
    console.log(dato);
})
.catch(error => {
    console.log("Error al conectar", error);
})