const express = require('express'); 
const groceriesRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let groceries = [
    { 
    item: "Milk",  
    priority: "N/A", 
    _id: uuidv4() 
    },
    { 
    item: "Eggs", 
    priority: "N/A", 
    _id: uuidv4() 
    },
    { 
    item: "Cheese", 
    priority: "N/A",
     _id: uuidv4() 
    },
    { 
    item: "Noodles", 
    priority: "N/A",
    _id: uuidv4() 
    },
    {
    item: "Bread", 
    priority: "N/A", 
    _id: uuidv4() 
    },
    {
    item: "Ice cream", 
    priority: "N/A",
    _id: uuidv4() 
    },
];

groceriesRouter.get('/', (req, res) => {
    res.send(groceries)
});

groceriesRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = groceries.find(item => item_id === itemId)
    res.send(groceries)
});

groceriesRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    groceries.push(newItem);

    console.log(groceries)
    res.send(`Successfully added ${newItem.item} to the database`);
});

groceriesRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

groceriesRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = groceries.findIndex(item => item._id === itemId);
    groceries.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = groceries.findIndex(item => item._id === itemId);
    const updateItem = Object.assign(groceries[itemIndex], req.body);

    res.send(`To do item successfully updated!`);
})

module.exports = groceriesRouter;