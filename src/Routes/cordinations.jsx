export const goToHome = (navigate) =>{
    navigate("/home")
}
export const goToPokedex = (navigate) =>{
navigate("/pokedex")
}
export const goToDetails = (navigate , pokemonName) =>{
    navigate(`/details/${pokemonName}`)
}
