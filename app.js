const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here
app.get('/api/todos', function(req, res) {
    res.json({ id: id, title: todo, completed: false });
});

app.post('/api/todos', function(req, res) {
    let todo = req.body.new - todo
    res.json({ id: id, title: todo, completed: false });
});

app.get('/api/todos[/id]', function(req, res) {
    let todo = req.body.new - todo;
    res.json({ id: id, title: todo, completed: false });
});

app.post('/api/todos[/id]', function(req, res) {
    let todo = req.body.new - todo;
    res.json({ id: id, title: todo, completed: false });
});

app.patch('/api/todos[/id]', function(req, res) {
    let todo = req.body.edit;
    res.json({ id: id, title: todo, completed: false })
});

app.delete('/api/todos[/id]', function(req, res) {
    let destroy = req.body.destroy;
    res.json({ id: id, title: destroy, completed: false })
});

app.listen(3000, function() {
    console.log('Express running on http://localhost:3000/.')
});