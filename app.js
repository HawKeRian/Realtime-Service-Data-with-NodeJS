const express = require('express');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http, {cors: {origin: "*"}})
const path = require('path')
const router = require('./routes/router')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('socketio', io)
app.use(router)                                             // For HTML - Template
app.use(express.static(path.join(__dirname, 'public')))     // For CSS / JS / Images

http.listen(8080, ()=>{
console.log("start server in port 8080");
})
