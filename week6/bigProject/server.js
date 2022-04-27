const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');
const todoListRouter = require('./routes/todoList');
const groceriesRouter = require('./routes/groceries');


const PORT = 3000;

app.use(express.json());

app.use('/todoList', todoListRouter)

app.use('/groceries', groceriesRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})