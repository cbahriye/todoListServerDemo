const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

let todos = [
    {id: "1", task: 'task1', isCompleted: false},
    {id: "2", task: 'task2', isCompleted: false},
    {id: "3", task: 'task3', isCompleted: false},
    {id: "4", task: 'task4', isCompleted: false},
];

// we handle the get request using app.get
app.get('/', (req, res) => res.send('Welcome home'));

// we want an endpoint getting all todos
// /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todos);
});

// we use post to create an item
app.post('/api/todos', function (req, res) {
    console.log(req.body);
    res.send('I have done post');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
