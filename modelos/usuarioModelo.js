const mongoose = require('mongoose');

const schemaUsuario = new mongoose.Schema(
    {
        nombre: String,
        contrasenia: String,
        descuento: Number,
        utilidad: Number,
        proveedor: String,
        idUsuario: String
    }
)

const UsuarioModelo = mongoose.model('Usuarios', schemaUsuario);

module.exports = UsuarioModelo;