
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('../route/personRutas.js')

const app = express()
const config = require('./db')
const PORT = 4000



//Conexión a BD

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log(`CONEXIÓN EXITOSA!!! :D`) },
    error => { console.log(`Error en la conexión:
                    ${error}`)
});



app.use(bodyParser.json())

app.use('/Api2', routes)

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message})
})


//Conexión a Puerto

app.listen(PORT, function(){
    console.log(`Corriendo en el Puerto:${PORT}`);
});