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

router.get('/3rd_floor', async (req, res) =>{
    var floor3 = await Floor3.getData();

    res.render('3rd_floor', {data: floor3[0]})
    res.end()
})

router.get('/4th_floor', async (req, res) =>{
    var floor4 = await Floor4.getData();

    res.render('4th_floor', {data: floor4[0]})
    res.end()
})

router.get('/5th_floor', async (req, res) =>{
    var floor5 = await Floor5.getData();

    res.render('5th_floor', {data: floor5[0]})
    res.end()
})


// Fetch Data

router.get('/api/overview', async (req, res) =>{
    var overview = await Overview.getData();
    overview = [{
        floor3: parseInt(Math.random()*100),
        floor4: parseInt(Math.random()*100),
        floor5: parseInt(Math.random()*100),
    }]

    res.json(overview[0])
})

router.get('/api/floor3', async (req, res) =>{
    var floor3 = await Floor3.getData();
    res.json(floor3[0])
})

router.get('/api/floor4', async (req, res) =>{
    var floor4 = await Floor4.getData();
    res.json(floor4[0])
})

router.get('/api/floor5', async (req, res) =>{
    var floor5 = await Floor5.getData();
    res.json(floor5[0])
})



module.exports = router