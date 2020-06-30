const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const url = 'mongodb://mongo:27017/'
const dbName = 'test';
const client = new MongoClient(url);
let db = null;

client.connect()
    .then((mongoClient) => {
        console.log('Conected to DB');

        db = mongoClient.db(dbName);
    })
    .catch((err) => {
        console.log('Connection error:', err.message);
    })

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

app.get('/list', (req, res) => {
    db.collection('example').find({}).toArray()
        .then((values) => {
            res.json({ message: values });
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

app.get('/add', (req, res) => {
    const data = { value: new Date() };

    db.collection('example').insertOne(data)
        .then(() => {
            res.json({ message: data });
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

app.get('/clear', (req, res) => {
    db.collection('example').remove({})
        .then(() => {
            res.json({ message: 'List cleared' });
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
