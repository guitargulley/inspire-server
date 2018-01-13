var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var cors = require('cors')
var port = "bg-inspire.herokuapp.com"

//route variables
var todoRoutes = require('./server/routes/todo-routes')

//register Middlewear
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))


///register routes
server.use(todoRoutes)

server.listen(port, function(){
    console.log('Serving todos on port: ', port)
})