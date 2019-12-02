const express = require('express');
const app = express();

app.use(express.json());

const port = 5000;

let todos = [
    {id: "1", task: 'task1', isCompleted: false},
    {id: "2", task: 'task2', isCompleted: false},
    {id: "3", task: 'task3', isCompleted: false},
    {id: "4", task: 'task4', isCompleted: false},
];
let todosId = todos.length;

// we handle the get request using app.get
app.get('/', (req, res) => res.send('Welcome home'));


// we want an endpoint getting all todos
// /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todos);
});

// we use post to create an item
app.post('/api/todos', function (req, res) {
    const itemToAdd = {...req.body, id: ++todosId};
    todos.push(itemToAdd);
    res.send(itemToAdd);
});


// we want to get a particular todoItem by id
// /api/todos/1
app.get('/api/todos/:id(\\d+)/', function (req, res) {
    const todoId = req.params.id;
    const item = todos.find(x => x.id === todoId);
    res.send(item);
});

// we want an endpoint filtering todo by name
// /api/todos/search?task=sk
// /api/todos/:id([a-zA-Z]+)  // char only url
app.get('/api/todos/search', (req, res) => {
    const taskQueryString = req.query.task;
    const fitleredItems = todos.filter(
        x => x.task.indexOf(taskQueryString) !== -1);
    res.send(fitleredItems);
});

app.put('/api/todos/:id', (req, res) => {
    const itemToupdate = todos.find(x => x.id === req.params.id);
    for (let key of Object.keys(req.body)) {
        itemToupdate[key] = req.body[key];
    }
    res.send(itemToupdate);
});

app.delete('/api/todos/:id', (req, res) => {
    const itemToDelete = todos.find(x => x.id === req.params.id);

    todos.splice(todos.indexOf(itemToDelete), 1);
    res.send(itemToDelete);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

