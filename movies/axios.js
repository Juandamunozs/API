const API = "https://rickandmortyapi.com/api/character/";

axios.get(url)
.then(resultado=>{
    const dato = resultado.data.resultas;
})
.catch(error=>{
    console.log('El error es ', error)
})