const express = require('express'); 
const itemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let items = [
    { 
        item: 'socks',
        type: 'clothing', 
        _id: uuidv4() 
    },
    { 
        item: 'stuffed bear',
        type: 'toy', 
        _id: uuidv4() 
    },
    { 
        item: 'apple',
        type: 'food',
        _id: uuidv4() 
    },
    { 
        item: 'shirt',
        type: 'clothing',
        _id: uuidv4() 
    },
    {
        item: 'Ivy',
        type: 'plant',
        _id: uuidv4() 
    },
    {
        item: 'phone',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'hat',
        type: 'clothing',
        _id: uuidv4()
    },
    {
        item: 'dill',
        type: 'plant',
        _id: uuidv4()
    },
    {
        item: 'barbie',
        type: 'toy',
       _id: uuidv4()
    },
    {
        item: 'tablet',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'cereal',
        type: 'food',
        _id: uuidv4()
    },
    {
        item: 'pants',
        type: 'clothing',
        _id: uuidv4()
    },
    {
        item: 'TV',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'legos',
        type: 'toy',
        _id: uuidv4()
    },
    {
        item: 'cheerios',
        type: 'food',
        _id: uuidv4()
    },
    {
        item: 'onsies',
        type: 'clothing',
       _id: uuidv4()
    },
    {
        item: 'croton',
        type: 'plant',
        _id: uuidv4()
    },
    {
        item: 'computer',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'teether',
        type: 'toy',
       _id: uuidv4()
    },
    {
        item: 'chamomile',
        type: 'plant',
        _id: uuidv4()
    },
    {
        item: 'oatmeal',
        type: 'food',
        _id: uuidv4()
    },
];

itemsRouter.get('/', (req, res) => {
    res.send(items)
});

itemsRouter.get('/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const singleItem = items.find(item => item._id === itemId);

  res.send(singleItem);
});

itemsRouter.get('/search/type', (req, res) => {
    const itemType = req.query.type;
    const filteredItems = items.filter(items => items.type === itemType);

    res.send(filteredItems);
});

itemsRouter.get('/search/name', (req, res) => {
    const itemName = req.query.item;
    const filteredName = items.filter(items => items.item === itemName);

    res.send(filteredName);
});

module.exports = itemsRouter;