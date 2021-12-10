const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
  },
});

module.exports = mongoose.model("Books", BookSchema);
