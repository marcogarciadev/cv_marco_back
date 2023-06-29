const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    subjet:String,
    message:String,
});

const Cvclientes = mongoose.model('cvclientes',ClientesSchema);

module.exports = Cvclientes;


// Agregar el atributo user para validar si puedo traer varios clientes por un usuario luego en las consultas