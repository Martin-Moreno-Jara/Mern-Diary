const entriesModel = require('../models/entryModel')

//GET ALL ENTRIES
const getAllEntries = async (req,res)=>{
    const entries = await entriesModel.find({}).sort({createdAt:-1});
    res.status(200).json(entries)
}

//GET A SINGLE ENTRY

//CREATE NEW ENTRY
const createEntry = async (req,res)=>{
    const {title,date,description} = req.body;
    try{
        const entry = await entriesModel.create({title,date,description})
        res.status(200).json(entry);
    }
    catch(error){
        res.status(400).json({error:`couldn't create ${error}`})
    }
}

//DELETE ENTRY

//UPDATE ENTRY


module.exports={
    createEntry,
    getAllEntries
}