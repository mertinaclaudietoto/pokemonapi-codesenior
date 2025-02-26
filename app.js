const express = require('express');
const {success}=require('./helper')
let pokemons = require('./db/mock-pokemons')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello Express! xd");
});


app.use((req, res,next) => {
    console.log("Hello Express! xd");
    next();
});
app.use((req, res,next) => {
    console.log("Hello Express 1! xd");
    next();
});


app.get('/api/pokemons/:id', (req, res) => {
    const id=req.params.id;
    const pokemon=pokemons.find(pokemon => pokemon.id ==id)
    console.log(pokemon)
    const message="UN pokemon a bien ete trouver";
    res.json(success(message,pokemon));
});

app.get('/api/pokemons', (req, res) => {
    const message ="la liste de pokemons";
    res.json(success(message,pokemons));
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
