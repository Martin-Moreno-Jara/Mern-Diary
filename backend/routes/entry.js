const express = require('express');
const entries = require('../models/entryModel')
const router = express.Router();
const { createEntry, getAllEntries } = require('../controllers/entryController')

//GET ROUTES
    //get all entries
router.get('/',getAllEntries)

    //get a single route
router.get('/:id',(req,res)=>{
    res.json({mg:`retrieving single entry id ${req.params.id}`})
})

//POST ROUTES
router.post('/',createEntry)

//DELETE ROUTES
router.delete('/:id',(req,res)=>{
    res.json({mg:`delete entry id ${req.params.id}`})
})

//PATCH ROUTES  
router.patch('/:id',(req,res)=>{
    res.json({mg:`update entry id ${req.params.id}`})
})

module.exports = router