const UsuarioModelo = require('../modelos/usuarioModelo');

const obtenerUsuarios = (req, res) => {
    UsuarioModelo.find(
        {            
            proveedor: req.query.proveedor
        }
    )
    .then(
        (docs) => {
            console.log("Message has been saved successfully in the database.");
            console.log("This is a post request.");
            console.log("Doc: ", docs);
            res.send(docs);
        }
    ).catch(
        (err) => {
            console.log("There was an error saving the msg object to the database.");
            console.log("Sending 500 status code.");
            res.sendStatus(500);
        }
    );
}

const agregarNuevoUsuario = (req, res) => {
    const nuevoUsuario = new UsuarioModelo(
        {
            nombre: req.body.nombre,
            contrasenia: req.body.contrasenia,
            descuento: req.body.descuento,
            utilidad: 0,
            proveedor: req.body.proveedor,
            idUsuario: req.body.idUsuario
        }
    )
    nuevoUsuario.save()
    .then(
        () => {
            console.log("Message has been saved successfully in the database.");
            console.log("This is a post request.");
            console.log("Req body: ", req.body.nombre);
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            console.log("There was an error saving the msg object to the database.");
            console.log("Sending 500 status code.");
            res.sendStatus(500);
        }
    );
}

const obtenerUsuario = (req, res) => {
    UsuarioModelo.findOne(
        {            
            nombre: req.body.nombre,
            contrasenia: req.body.contrasenia
        }
    )
    .then(
        (docs) => {
            console.log("Message has been saved successfully in the database.");
            console.log("This is a post request.");
            console.log("Doc: ", docs);
            res.send(docs);
        }
    ).catch(
        (err) => {
            console.log("There was an error saving the msg object to the database.");
            console.log("Sending 500 status code.");
            res.sendStatus(500);
        }
    );
}

const modificarUsuario = (req, res) => {
    UsuarioModelo.findOneAndUpdate(
        {
            idUsuario: req.body.idUsuario
        },
        {
            nombre: req.body.nombre,
            contrasenia: req.body.contrasenia,
            descuento: req.body.descuento,
            utilidad: req.body.utilidad
        }
    )
    .then(
        () => {
            console.log("Message has been saved successfully in the database.");
            console.log("This is a post request.");
            console.log("Req body: ", req.body.nombre);
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            console.log("There was an error saving the msg object to the database.");
            console.log("Sending 500 status code.");
            res.sendStatus(500);
        }
    );
}

const eliminarUsuario = (req, res) => {
    UsuarioModelo.findOneAndDelete(
        {
            idUsuario: req.body.idUsuario
        }
    )
    .then(
        () => {
            console.log("Message has been saved successfully in the database.");
            console.log("This is a post request.");
            console.log("Req body: ", req.body.nombre);
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            console.log("There was an error saving the msg object to the database.");
            console.log("Sending 500 status code.");
            res.sendStatus(500);
        }
    );
}

module.exports = {
    obtenerUsuarios,
    agregarNuevoUsuario,
    obtenerUsuario,
    modificarUsuario,
    eliminarUsuario
}