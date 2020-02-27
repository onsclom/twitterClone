const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost:27017/testDB');

db.then(() => {
    console.log('Connected correctly to server')
  })

const messages = db.get('messages');

messages
    .find()
    .then(messages => {
         console.log(messages);
    });

app.use(cors());
app.use(express.json());


app.post('/', (req,res) => {
    console.log(req.body);
    const message = {
        name: req.body.name,
        content: req.body.content
    }
    messages
        .insert(message)
        .then(createdMessage => {
            res.json(createdMessage);
        });
});

app.get('/', (req,res) => {
    messages
        .find()
        .then(messages => {
            res.json(messages);
        });
})

app.listen(5000, () => {
    console.log("listening wow!")
});