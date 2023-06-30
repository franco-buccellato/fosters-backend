const express  = require('express');
require('dotenv').config()
/* const { request } = require('http'); */
const app = express();
const dbConnect = require('./db');
dbConnect(app);

//Importar archivo de rutas y modelo usuario
const usuarioRutas = require('./rutas/usuarioRutas');

//Importacion body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));
app.use('/api/usuario/', usuarioRutas)

app.get(
    '/',
    (req, res) => {
        res.end('Bienvenido al servidor Backend.');
    }
)