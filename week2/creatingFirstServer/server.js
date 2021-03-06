const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    { person: "Helen", age: "34", state: "Alabama" },
    { person: "Jerry", age: "52", state: "New York" },
    { person: "Oliver", age: "22", state: "Montana" },
    { person: "Gwen", age: "45", state: "Texas"}
]

let foods = [
    { item: "Burritos" },
    { item: "Lasagana" },
    { item: "Alfredo" },
    { item: "Chicken Parm" },
    { item: "Eggs"},
    { item: "Chips"}
]

let movies = [
    { title: "Brave", rated: "G", year: "2012" },
    { title: "Finding Nemo", rated: "G", year: "2003" },
    { title: "V for Vendetta", rated: "R", year: "2005" },
    { title: "The One", rated: "PG-13", year: "2001" },
    { title: "Beauty and the Beast", rated: "G", year: "1991" }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/foods', (req, res) => {
    res.send(foods)
})

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})