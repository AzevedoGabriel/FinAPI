const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

var customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - array
 */
app.post("/account", (req, res) => {
    const { cpf, name } = req.body;

    const costumerExists = customers.some((customer) => customer.cpf === cpf);

    if(costumerExists) {
        return res.status(400).json({ error: "Customer already exists!" });      
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return res.status(201).send();

});

app.listen(3333);