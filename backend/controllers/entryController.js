const entriesModel = require("../models/entryModel");
const mongoose = require("mongoose");

//GET ALL ENTRIES
const getAllEntries = async (req, res) => {
  const entries = await entriesModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(entries);
};

//GET A SINGLE ENTRY
const getSingleEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Not found. In fact, id ain't even valid" });
  }
  const entry = await entriesModel.findById(id);

  if (!entry) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(entry);
};

//CREATE NEW ENTRY
const createEntry = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const entry = await entriesModel.create({ title, date, description });
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: `couldn't create ${error}` });
  }
};

//DELETE ENTRY
const deleteEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found, not valid id" });
  }
  try {
    await entriesModel.deleteOne({ _id: `${id}` });
    res.status(200).json({ deletion: `entry with id: ${id} has been deleted` });
  } catch {
    res.status(404).json({ error: "Not found" });
  }
};

//UPDATE ENTRY

module.exports = {
  createEntry,
  getAllEntries,
  getSingleEntry,
  deleteEntry,
};
