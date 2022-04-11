const express = require('express'); 
const recycledRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let recycledItems = [
    { item: "Paper", description: "Used paper, yellow", recyclable: "yes", pricePerUnit: "$0.25", _id: uuidv4() },
    { item: "Cardborad", description: "Small boxes", recyclable: "yes", pricePerUnit: "$0.25", _id: uuidv4() },
    { item: "Glass", description: "Wine bottles", recyclable: "yes", pricePerUnit: "$0.75", _id: uuidv4() },
    { item: "Plastic", description: "Grocery bags", recyclable: "yes", pricePerUnit: "$1.00", _id: uuidv4() },
];

// recycledItems.get('/', function (req, res) {
//     res.render('index', {});
//   });

recycledRouter.get('/', (req, res) => {
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

recycledRouter.delete('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully deleted product.'
    })
})

module.exports = recycledRouter;