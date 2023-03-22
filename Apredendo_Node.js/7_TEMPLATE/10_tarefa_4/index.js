const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [{
        id: "1",
        jogador: "Marlon",
        idade: 18,
    },
    {
        id: "2",
        jogador: "Andrey",
        Idade: 18,
    },
    {
        id: "3",
        jogador: "Eguinaldo",
        idade: 18,
    },
];

app.get("/", function(req, res) {
    res.render("home", { products });
});

app.get("/product/:id", function(req, res) {
    const product = products[req.params.id];

    res.render("product", { product });
});

app.listen(3000);