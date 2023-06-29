require('dotenv').config();
const express = require('express');
const {dbConnection} = require ('./src/db/config.js');

const app = express();
dbConnection();


// interpretar la request y la parsea a json.
app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.get('/', (req,res) =>{
    res.status(200).send({message:"You are connected to the project"});

});

app.use("/api/cvclientes", require("./src/routes/cvclientes.routes.js"));
app.use("/api/usuarios", require("./src/routes/usuarios.routes.js"));

app.listen(process.env.PORT, () =>{
    console.log('App listening on port: ', process.env.PORT);
});

module.exports = app;

