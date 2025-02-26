const express = require('express');
const helper=require('./helper')
let pokemons = require('./db/mock-pokemons')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello Express! xd");
});

app.get('/api/pokemons/:id', (req, res) => {
    const id=req.params.id;
    const pokemon=pokemons.find(pokemon => pokemon.id ==id)
    console.log(pokemon)
    const message="UN pokemon a bien ete trouver";
    res.json(helper.success(message,pokemon));
});

app.get('/api/pokemons', (req, res) => {
    res.send(`IL y a aux total ${pokemons.length} pokeman`);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
