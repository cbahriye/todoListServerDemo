var express = require('express');
var router = express.Router();

let todos = [
    {id: "1", task: 'task1', isCompleted: false},
    {id: "2", task: 'task2', isCompleted: false},
    {id: "3", task: 'task3', isCompleted: false},
    {id: "4", task: 'task4', isCompleted: false},
];
let todosId = todos.length;


// we want an endpoint getting all todos
// /api/todos
router.get('/', (req, res) => {
    res.send(todos);
});

// we use post to create an item
router.post('/', function (req, res) {
    const itemToAdd = {...req.body, id: ++todosId};
    todos.push(itemToAdd);
    res.send(itemToAdd);
});


// we want to get a particular todoItem by id
// /api/todos/1
router.get('/:id(\\d+)/', function (req, res) {
    const todoId = req.params.id;
    const item = todos.find(x => x.id === todoId);
    res.send(item);
});

// we want an endpoint filtering todo by name
// /api/todos/search?task=sk
// /api/todos/:id([a-zA-Z]+)  // char only url
router.get('/search', (req, res) => {
    const taskQueryString = req.query.task;
    const fitleredItems = todos.filter(
        x => x.task.indexOf(taskQueryString) !== -1);
    res.send(fitleredItems);
});

router.put('/:id', (req, res) => {
    const itemToupdate = todos.find(x => x.id === req.params.id);
    for (let key of Object.keys(req.body)) {
        itemToupdate[key] = req.body[key];
    }
    res.send(itemToupdate);
});

router.delete('/:id', (req, res) => {
    const itemToDelete = todos.find(x => x.id === req.params.id);

    todos.splice(todos.indexOf(itemToDelete), 1);
    res.send(itemToDelete);
});


module.exports = router;
