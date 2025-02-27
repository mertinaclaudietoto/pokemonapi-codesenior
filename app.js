const express = require('express');
const {success,getUniqueId}=require('./helper');
const favicon =require('serve-favicon');
const bodyParser=require('body-parser')
let pokemons = require('./db/mock-pokemons');
const morgan = require('morgan');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello Express! xd");
});




app
    .use(favicon(__dirname+"/favicon.ico"))
    .use(morgan('dev'))
    .use(bodyParser.json())


app.get('/api/pokemons/:id', (req, res) => {
    const id=req.params.id;
    const pokemon=pokemons.find(pokemon => pokemon.id ==id)
    console.log(pokemon)
    const message="UN pokemon a bien ete trouver";
    res.json(success(message,pokemon));
});

app.push('/api/pokemons/:id', (req, res) => {
    const id=parseInt(req.params.id) ;
    const pokemenUpdate={...req.body,id:id}
    pokemons=pokemons.map(pokemon=>pokemon.id===id ?pokemenUpdate : pokemon);
    const message="valeur modifier";
    res.json(success(message,pokemon));
});

app.delete('/api/pokemons/:id', (req, res) => {
    const id=parseInt(req.params.id) ;
    const pokemenUpdate={...req.body,id:id}
    pokemons=pokemons.filter(pokemon=>pokemon.id!==id );
    const message="valeur supprimer";
    res.json(success(message,pokemons));
});

app.get('/api/pokemons', (req, res) => {
    const message ="la liste de pokemons";
    res.json(success(message,pokemons));
});

app.post('/api/pokemons', (req, res) => {
    const id=getUniqueId(pokemons);
    const pokemonCreated={...req.body,...{id:id,created:new Date()}}
    pokemons.push(pokemonCreated)
    const message=`Le pokemon a ete bien ajouter ${id}`;
    res.json(success(message,pokemonCreated));
});


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
