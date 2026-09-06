const express = require('express');
const app = express();
const port = 3000;
//Task 1 Basic Routes
app.get('/', (req, res) => {
    console.log(req.method, req.url)
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    console.log(req.method, req.url)
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
    console.log(req.method, req.url)
  res.send('This is the Contact Page');
}); 
app.listen(port, () => {
    console.log(`Server is running on port ${3000}`)
})
//Task 2 Route Parameters
app.get('/user/:name', (req, res) => {
    console.log(req.method, req.url)
    const name = req.params.name
    res.send(`Hello ${name}`)
})
//Task 3 Multiple Route Parameters
app.get('/product/:id/:category', (req, res) => {
    console.log(req.method, req.url)
    const id = req.params.id
    const category = req.params.category

    res.send(`Product ID: ${id}, Category: ${category}`)
})
//Task 4 Query Parameters
app.get('/search', (req, res) => {
    console.log(req.method, req.url)
    const name = req.query.name
    const role = req.query.role

    res.send(`Name: ${name}, Role: ${role}`)
})