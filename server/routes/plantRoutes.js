
const express = require('express');
const router = express.Router();

const {
    receiveData,
    saveData,
    getData
} = require('../Connections/PlantConnections')

router.post('/data', receiveData); // RECEIVE DATA FROM PI
router.get('/data', getData); // GET all data from MongoDB

module.exports = router;