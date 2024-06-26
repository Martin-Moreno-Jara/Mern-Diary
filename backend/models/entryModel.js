const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const entrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("entries", entrySchema);
