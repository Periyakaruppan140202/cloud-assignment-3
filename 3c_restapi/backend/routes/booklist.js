const express = require("express");
const router = express.Router();
const Book = require("../models/Books");

//Get All Books List
router.get("/", async (req, res) => {
  try {
    const showBook = await Book.find();
    res.json(showBook);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const booklist = req.body;
  const postBook = new Book({
    title: booklist.title,
    author: booklist.author,
    price: booklist.price,
    rank: booklist.rank,
  });
  try {
    const savedBook = await postBook.save();
    console.log(savedBook);
    res.json(savedBook);
  } catch (err) {
    res.json(err);
  }
});

//Get Specific Books from the List
router.get("/:rank", async (req, res) => {
  try {
    const showBook = await Book.find({
      rank: req.params.rank,
    });
    res.json(showBook);
  } catch (err) {
    res.json(err);
  }
});

//Delete Book
router.delete("/:BookID", async (req, res) => {
  try {
    const deleteBook = await Book.deleteOne({
      _id: req.params.BookID,
    });
    res.json(deleteBook);
  } catch (err) {
    res.json(err);
  }
});

//Update Book
router.patch("/:BookID", async (req, res) => {
  try {
    // console.log(req.body);
    const updateBook = await Book.updateMany(
      {
        _id: req.params.BookID,
      },
      {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
      }
    );
    // console.log(req.body);
    res.json(updateBook);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
