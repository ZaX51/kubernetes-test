const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/'
const DB_NAME = 'test';

const mongoClient = new MongoClient(MONGO_URL, {
    useUnifiedTopology: true
});
let db = null;

mongoClient.connect()
    .then((client) => {
        console.log('Conected to DB');

        db = client.db(DB_NAME);
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

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
