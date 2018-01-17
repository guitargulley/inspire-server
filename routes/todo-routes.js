var Todos = require('../models/todo')
var router = require('express').Router()


router.get('/api/todos', (req, res, next)=>{
    Todos.find({})
        .then(todos =>{
            res.send(todos)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/todos', (req, res, next)=>{
    Todos.create(req.body)
        .then(todo => {
            let response = {
                data: todo,
                message: 'Successfully created Todo!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.put('/api/todos/:id', (req, res, next)=>{
    var action = 'Update Todo'
    Todos.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(handleResponse(action, data))
        })
        .catch(err =>{
            res.status(400).send(handleResponse(action, null, err))
        })
})


router.delete('/api/todos/:id', (req, res, next)=>{
    Todos.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that todo'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

function handleResponse(action, data, error){
    var response =  {
        message: action,
        data: data
    }
    if(error){
        response.error = error
    }
    return response
}


module.exports = router