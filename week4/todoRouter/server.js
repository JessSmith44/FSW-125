const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');
// const morgan = require('morgan');
const todoListRouter = require('./routes/todoList');
const groceriesRouter = require('./routes/groceries');
const todoIntake = require('./routes/todoIntake');


const PORT = 3000;

app.use(express.json());

// app.use(morgan('dev'));

app.use('/todoList', todoListRouter)

app.use('/groceries', groceriesRouter)

app.use('/todoIntake', todoIntake)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})