const express = require('express');
const router = express.Router();

//GET ROUTES
    //get all entries
router.get('/',(req,res)=>{
    res.json({mg:'GET all entries'});
})
    //get a single route
router.get('/:id',(req,res)=>{
    res.json({mg:`retrieving single entry id ${req.params.id}`})
})

//POST ROUTES
router.post('/',(req,res)=>{
    res.json({mg:'post a new entry'})
})

//DELETE ROUTES
router.delete('/:id',(req,res)=>{
    res.json({mg:`delete entry id ${req.params.id}`})
})

//PATCH ROUTES  
router.patch('/:id',(req,res)=>{
    res.json({mg:`update entry id ${req.params.id}`})
})

module.exports = router