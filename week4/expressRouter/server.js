const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');

const recycledRouter = require('./routes/recycledRouter');
const itemsIntake = require('./routes/itemsIntake');

const PORT = 3000;

app.use(express.json());

app.use('/recycledItems', recycledRouter)

app.use('/itemsIntake', itemsIntake)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})