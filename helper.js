exports.success=(message,data)=>{
    return {message,data }
}
exports.getUniqueId=(pokemons)=>{
    const pokemonsId=pokemons.map((pokemon)=> pokemon.id)
    const maxId =pokemonsId.reduces((a,c)=> Math.max(a,b))
    const uniqueId=maxId+1;
    return uniqueId;
}