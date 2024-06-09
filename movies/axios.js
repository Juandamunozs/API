const API = "https://https://rickandmortyapi.com/api/characters/";

axios.get(url)
.then(resultado=>{
    const dato = resultado.data.resultas;
})
.catch(error=>{
    console.log('El error es ', error)
})