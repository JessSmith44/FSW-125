const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');
const itemsRouter = require('./routes/items');


const PORT = 3000;

app.use(express.json());

app.use('/items', itemsRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})