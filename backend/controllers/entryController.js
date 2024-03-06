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
    res.status(400).json({ error: ` ${error}` });
  }
};

//DELETE ENTRY
const deleteEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found, not valid id" });
  }
  const deletion = await entriesModel.findOneAndDelete({ _id: id });
  if (!deletion) {
    return res.status(404).json({ error: "Not found" });
  }
  res
    .status(200)
    .json({ deleteConfirmation: `Entry with id ${id} was deleted` });
};

//UPDATE ENTRY
const updateEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found, not valid id" });
  }
  const entry = await entriesModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!entry) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(entry);
};

module.exports = {
  createEntry,
  getAllEntries,
  getSingleEntry,
  deleteEntry,
  updateEntry,
};
