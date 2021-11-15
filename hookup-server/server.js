import express from 'express';
import mongoose from 'mongoose';
import Cards from './database/cardsSchema.js';
import Cors from 'cors';
/**
 * app config
 */

const app = express(); // Initialize ExpressJs
const port = process.env.PORT || 8001; // Define Port
const username = 'hookupadmin';
const password = 'Strangethings001'
const database = 'hookupdb'
const connection_url = `mongodb+srv://${username}:${password}@hookupcloud.9uxyj.mongodb.net/${database}`


/**
 * middlewares
 */

app.use(express.json);
app.use(Cors()); // Put header in every requests

/**
 * db config
 */

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



/**
 * api endpoints
 */


app.get('/', (req, res) => {
    // base url end point\
    return res.status(200).send('Eyo!')
});

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err) res.status(500).send(err);
        else res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) res.status(500).send(err);
        else res.status(200).send(data)
    })
})

/**
 * listeners
 */

app.listen(port, () => console.log(`HookUp Server running === Port: ${port}`));