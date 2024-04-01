const express = require("express");
const { requireAuth } = require("../middleware/requireAuth");
const router = express.Router();
const {
  createEntry,
  getAllEntries,
  getSingleEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/entryController");

//middleware
router.use(requireAuth);

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
router.patch("/:id", updateEntry);

module.exports = router;
