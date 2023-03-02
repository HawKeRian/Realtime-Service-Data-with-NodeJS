const express = require('express');
const router = express.Router()

// Call Model from DB
const Floor3 = require('../models/floor3')
const Floor4 = require('../models/floor4')
const Floor5 = require('../models/floor5')
const Overview = require('../models/overview')
const History = require('../models/history')

router.get('/', async (req, res) =>{
    var overview = await Overview.getData();

    res.render('index', {data: overview[0]})
    res.end()
})

router.get('/api/overview', async (req, res) =>{
    // var overview = await Overview.getData();

    overview = [{
        floor3: parseInt(Math.random()*100),
        floor4: parseInt(Math.random()*100),
        floor5: parseInt(Math.random()*100),
    }]

    res.json(overview[0])
})




router.get('/3rd_floor', async (req, res) =>{
    // var floor3 = await Floor3.getData();
    // var io = req.app.get('socketio');

    // async function sendData3F() {
    //     floor3 = await Floor3.getData()
    //     io.emit('3rd_floor', {data:floor3.data})
    // }

    // await sendData3F();


    // res.render('3rd_floor', {data: floor3.data})
    // setInterval(sendData3F, 20000);
})


router.get('/4th_floor', async (req, res) =>{
    // var floor4 = await Floor4.getData();
    // var io = req.app.get('socketio');

    // async function sendData4F() {
    //     floor4 = await Floor4.getData()
    //     io.emit('4th_floor', {data:floor4.data})
    // }

    // await sendData4F();

    // res.render('4th_floor', {data: floor4.data})
    // setInterval(sendData4F, 20000);
})

router.get('/5th_floor', async (req, res) =>{
    // var floor5 = await Floor5.getData();
    // var io = req.app.get('socketio');

    // async function sendData5F() {
    //     floor5 = await Floor5.getData()
    //     io.emit('5th_floor', {data:floor5.data})
    // }

    // await sendData5F();

    // res.render('5th_floor', {data: floor5.data})
    // setInterval(sendData5F, 20000);
})

module.exports = router