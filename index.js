const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productCollection = require("./Data/product.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
})

app.get("/allProducts", (req, res) => {
    res.send(productCollection);
})

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = productCollection?.find(p => p.id == id);
    if (!getSingleItem) {
        res.send("Product khuje pai nai");
    }
    res.send(getSingleItem);
})

app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = productCollection.filter(p => p.category == name);
    res.send(getCategory);
})

app.listen(Port, () => {
    console.log("server is running", Port);
})

module.exports = app;
