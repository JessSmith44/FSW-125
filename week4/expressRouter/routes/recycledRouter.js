const express = require('express'); 
const recycledRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let recycledItems = [
    { item: "Paper", description: "Used paper, yellow", recyclable: "yes", pricePerUnit: "$0.25", _id: uuidv4() },
    { item: "Cardborad", description: "Small boxes", recyclable: "yes", pricePerUnit: "$0.25", _id: uuidv4() },
    { item: "Glass", description: "Wine bottles", recyclable: "yes", pricePerUnit: "$0.75", _id: uuidv4() },
    { item: "Plastic", description: "Grocery bags", recyclable: "yes", pricePerUnit: "$1.00", _id: uuidv4() },
];

recycledRouter.get('/', (req, res) => {
    res.send(recycledItems)
});

recycledRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = recycledItems.find(item => item_id === itemId)
    res.send(recycledItems)
});

recycledRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);

    console.log(recycledItems)
    res.send(`Successfully added ${newItem.item} to the database`);
});

recycledRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

recycledRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item._id === itemId);
    recycledItems.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item._id === itemId);
    const updateItem = Object.assign(recycledItems[itemIndex], req.body);

    res.send(`Recyclable item successfully updated!`);
})

module.exports = recycledRouter;