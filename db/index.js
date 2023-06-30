const mongoose = require('mongoose');

const dbConnect = (app) => {
    mongoose.connect(
        'mongodb+srv://fosters:fosters1234@fosters.ar2aaie.mongodb.net/usuariosFosters?retryWrites=true&w=majority'
        ).then(
            (result) => {
                result => console.log('Conexión exitosa! ' + result);
                const PORT = process.env.PORT;
                app.listen(
                    PORT,
                    function() {
                        console.log(`El servidor Node esta corriendo en el puerto ${PORT}`);
                    }
                )

            }
        ).catch(
            err => console.log('Error al conectarse: ' + err)
        )

        const objetoBD = mongoose.connection;
        objetoBD.on(
            'connected',
            () => {
                console.log('Conexión exitosa con MongoDB.')
            }
        );
        objetoBD.on(
            'error',
            () => {
                console.log('Conexión fallida con MongoDB.')
            }
        );
}


module.exports = dbConnect