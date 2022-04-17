const express = require('express')
const books = require('./books.json')
const PORT = 8000;
const fs = require("fs")

let app = express();
app.use(express.json())

// GET
app.get("/books", async (req, res) => {
    res.json(books)
})

// GET BY ID
app.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === Number.parseInt(id))
    res.json(book);

})

// POST
app.post("/books", async (req, res) => {
    try {
        books.push(req.body)
        fs.writeFileSync("books.json", JSON.stringify(books))
        res.json(req.body)
    } catch (error) {
        console.log(error);
    }
})

// DELETE
app.delete("/books/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const updatedBook = books.filter((book) => book.id !== id);
        fs.writeFileSync("books.json", JSON.stringify(updatedBook))
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
    }
})

// EDIT
app.patch("/books/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const bookBody = req.body;
        const updatedBook = books.map((book) => book.id === id ? bookBody : book);
        fs.writeFileSync("books.json", JSON.stringify(updatedBook))
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
    }
})


app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})