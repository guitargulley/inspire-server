var mongoose = require('mongoose')
var connectionString = "mongodb://bgulley:musicmajor@ds046267.mlab.com:46267/inspire-server"
var connection = mongoose.connection




mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to DataBase BRO!!!')
})