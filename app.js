const express = require('express');
const todoRoutes = require('./router/todoRouter');

const app = express();

app.use(express.json());

const port = 5000;


// we handle the get request using app.get
app.get('/', (req, res) => res.send('Welcome home'));
app.use('/api/todos', todoRoutes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

