const express = require('express');
const router = express.Router()

// Call Model from DB
const Floor3 = require('../models/floor3')
const Floor4 = require('../models/floor4')
const Floor5 = require('../models/floor5')
const Overview = require('../models/overview')
const History = require('../models/history')

router.get('/', async (req, res) =>{
    var overview = await Overview();
    var io = req.app.get('socketio');

    setInterval( async () => {
        overview = await Overview()
        io.emit('update', {data:overview.data})
        console.log('...');
    }, 5000);

    res.render('index', {data: overview.data.rows})

})


router.get('/3rd_floor', async (req, res) =>{
    var floor3 = await Floor3();
    var io = req.app.get('socketio');

    setInterval( async () => {
        floor3 = await Floor3()
        io.emit('3rd_floor', {data:floor3.data.rows})
    }, 5000);

    res.render('3rd_floor', {data: floor3.data.rows})

})


router.get('/4th_floor', async (req, res) =>{
    var floor4 = await Floor4();
    var io = req.app.get('socketio');

    setInterval( async () => {
        floor4 = await Floor4()
        io.emit('4th_floor', {data:floor4.data.rows})
    }, 5000);

    res.render('4th_floor', {data: floor4.data.rows})
    
})

router.get('/5th_floor', async (req, res) =>{
    var floor5 = await Floor5();
    var io = req.app.get('socketio');

    setInterval( async () => {
        floor5 = await Floor5()
        io.emit('5th_floor', {data:floor5.data.rows})
    }, 5000);

    res.render('5th_floor', {data: floor5.data.rows})
    
})

module.exports = router