var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

io.on('connection', (socket) => {

})

var server = http.listen(3000, () => {
    console.log('Connected to port:', server.address().port)
})