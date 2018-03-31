const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.send(doc);
        }, error => {
            res
                .status(400)
                .send(error);
        });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, error => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log('Started on port: ' + port);
});

module.exports = {
    app
};