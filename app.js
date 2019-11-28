const express = require('express');
const app = express();
const port = 3000;

// we handle the get request using app.get
app.get('/', (req, res) => res.send('Welcome home'));

// we want an endpoint getting all todos
// /api/todos
app.get('/api/todos', (req, res) => {

    res.send(["a", "b", "c"]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
