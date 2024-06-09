const API = "https://rickandmortyapi.com/api/character/";

axios.get(API)
.then(resultado=>{
    const dato = resultado.data.results;
    
    dato.forEach(personaje => {
        console.log('Nombre: ', personaje.name);
        console.log('Status: ', personaje.status);
    });
})
.catch(error=>{
    console.log('El error es ', error)
})