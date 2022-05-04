const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');
const recycledRouter = require('./routes/recycledRouter');
const itemsIntake = require('./routes/itemsIntake');
// const { response } = require('express');

const PORT = 9000;

app.use(express.json());

app.use('/recycledItems', recycledRouter)

app.use('/itemsIntake', itemsIntake)

app.get('/recycledItems', (req, res) => {
    res.type('text/plain')
    res.status(200)
    res.send('Successful request');
})

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send({ errMsg: err.message })
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})