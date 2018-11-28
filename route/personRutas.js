
const express = require('express')
const router = express.Router()
const Person = require('../modelo/personModelo')

// Agregar
router.post('/person', function(req,res,next){
    Person.create(req.body).then(function(person){
        res.send(person)
    }).catch(next)
})

// Consultar
router.get('/person', function(req,res,next){
    Person.find({activa:false}).then(function(person){
        res.send(person)
    }).catch(next)
})

// Actualizar
router.put('/person/:nombre', function(req,res,next){
    Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Person.findOne({_id: req.params.id}).then(function(person){
            res.send(person)
        })
    }).catch(next)
})

//Eliminar
router.delete('/person/:nombre', function(req,res,next){
    Person.findOneAndRemove({_id: req.params.id}).then(function(person){
        res.send(person)
    }).catch(next)
})

module.exports = router
