const express = require('express'); 
const groceriesRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let groceries = [
    { 
    item: "Milk",  
    type: 'perishable', 
    _id: uuidv4() 
    },
    { 
    item: "Eggs", 
    type: 'perishable', 
    _id: uuidv4() 
    },
    { 
    item: "Cheese", 
    type: 'perishable',
     _id: uuidv4() 
    },
    { 
    item: "Noodles", 
    type: 'non-perishable',
    _id: uuidv4() 
    },
    {
    item: "Bread", 
    type: 'non-perishable', 
    _id: uuidv4() 
    },
    {
    item: "Ice cream", 
    type: 'perishable',
    _id: uuidv4() 
    },
    {
    item: "Canned veggies", 
    type: 'non-perishable', 
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

groceriesRouter.get('/search/type', (req, res) => {
    const itemType = req.query.type;
    const filteredItems = items.filter(items => items.type === itemType);

    res.send(filteredItems);
});

groceriesRouter.get('/search/name', (req, res) => {
    const itemName = req.query.item;
    const filteredName = items.filter(items => items.item === itemName);

    res.send(filteredName);
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