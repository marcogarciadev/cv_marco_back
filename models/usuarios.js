const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    userid:String,
    pass:String,
});

const Usuarios = mongoose.model('usuarios',UsuariosSchema);

module.exports = Usuarios;