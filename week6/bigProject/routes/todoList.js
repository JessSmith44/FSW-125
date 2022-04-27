const express = require('express'); 
const todoListRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let todoList = [
    { 
    item: "Make meals for the week",  
    priority: "yes", 
    finishTime: "Wednesday",
    _id: uuidv4() 
    },
    { 
    item: "Schedule homework review", 
    priority: "no",
    finishTime: "12 pm",  
    _id: uuidv4() 
    },
    { 
    item: "Grocery Shopping", 
    priority: "yes", 
    finishTime: "Saturday",
     _id: uuidv4() 
    },
    { 
    item: "Finish laundry", 
    priority: "no",
    finishTime: "Sunday", 
    _id: uuidv4() 
    },
    {
    item: "Call Dr", 
    priority: "yes",
    finishTime: "Wednesday", 
    _id: uuidv4() 
    },
    {
    item: "Deep clean kitchen", 
    priority: "no",
    finishTime: "Sunday", 
    _id: uuidv4() 
    },
];

todoListRouter.get('/', (req, res) => {
    res.send(todoList)
});

todoListRouter.get('/search/finishTime', (req, res) => {
    const finishTimeSearch = req.query.finishTime;
    const filteredfinishTime = todoList.filter(item => item.finishTime === finishTimeSearch );

    res.send(filteredfinishTime)
});

todoListRouter.get('/search/priority', (req, res) => {
    const prioritySearch = req.query.priority;
    const filteredpriority = todoList.filter(item => item.priority === prioritySearch );

    res.send(filteredpriority)
});

todoListRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = todoList.find(item => itemId === itemId)
    res.send(oneItem)
});

todoListRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    todoList.push(newItem);

    console.log(todoList)
    res.send(`Successfully added ${newItem.item} to the database`);
});

todoListRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully list product.'
    })
})

todoListRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);
    todoList.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);
    const updateItem = Object.assign(todoList[itemIndex], req.body);

    res.send(`To do item successfully updated!`, updateItem);
})

module.exports = todoListRouter;