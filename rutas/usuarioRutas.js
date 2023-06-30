const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador');

//Agregar nuevo usuario
router.post('/nuevo', usuarioControlador.agregarNuevoUsuario)

//Obtener lista de usuarios
router.get('/',usuarioControlador.obtenerUsuarios);

//Obtener un usuario
router.post('/', usuarioControlador.obtenerUsuario);

//Modificar usuario
router.post('/actualizar', usuarioControlador.modificarUsuario);

//Eliminar usuario
router.post('/eliminar',usuarioControlador.eliminarUsuario);

module.exports = router