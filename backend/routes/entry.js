const express = require("express");
const entries = require("../models/entryModel");
const router = express.Router();
const {
  createEntry,
  getAllEntries,
  getSingleEntry,
  deleteEntry,
} = require("../controllers/entryController");

//GET ROUTES
//get all entries
router.get("/", getAllEntries);

//get a single route
router.get("/:id", getSingleEntry);

//POST ROUTES
router.post("/", createEntry);

//DELETE ROUTES
router.delete("/:id", deleteEntry);

//PATCH ROUTES
router.patch("/:id", (req, res) => {
  res.json({ mg: `update entry id ${req.params.id}` });
});

module.exports = router;
