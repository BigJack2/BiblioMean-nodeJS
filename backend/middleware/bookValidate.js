import book from "../models/book.js";

const existingBook = async (req, res, next) => {

  if (!req.body.nameBook) return res.status(400).send({ message: "Incomplete data" });

  const existingBook = await book.findOne({ nameBook: req.body.nameBook });
  if (existingBook) return res.status(400).send({ message: "The book is already registered" });

  next();
};

export default { existingBook };