
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({    

    nombre: {
        type: String,
        required: [true, 'Debe llenar el campo nombre']
    },

    edad: {
        type: Number,
    },

    instituto: {
        type: String,        
    },
    
    cargo:{
        type: String,
    },
    
    nota:{
        type: Number,
    }
})

const Person = mongoose.model('person', PersonSchema)

module.exports = Person