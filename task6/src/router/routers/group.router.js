const express = require('express');
const {
    getData,
    addData,
    updateData,
    getOneOfData,
    deleteData
} = require('./../../controllers/group.controller.js');
const router = express.Router();

router.get('/groups', getData);
router.post('/groups', addData);
router.put('/groups/:id', updateData);
router.get('/groups/:id', getOneOfData);
router.delete('/groups/:id', deleteData);

module.exports = router;
