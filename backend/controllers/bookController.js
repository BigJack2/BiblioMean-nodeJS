import book from "../models/book.js";

const registerBook = async (req, res) => {

  if (!req.body.nameBook || !req.body.description)
    return res.status(400).send({ message: "Imcomplete data" });

  let schemaBook = new book({
    nameBook: req.body.nameBook,
    author: req.body.author,
    description: req.body.description,
    secction: req.body.secction,
    typePublic: req.body.typePublic,
    priceLeasing: req.body.priceLeasing,
    priceBook: req.body.priceBook,
    statusLeasing: true,
    dbStatus: true,
  });

  let myResult = await schemaBook.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register book" });

  res.status(200).send({ myResult })
};


const listBook = async (req, res) => {
  //populate es para que me traiga todo asociado al id de book
  let books = await book.find();

  //si el tamaño de items del array es cero entonces no hay nada
  if (books.length === 0) return res.status(400).send({ message: "No search results" });

  return res.status(200).send({ books });
};


const deleteBook = async (req, res) => {
  if (!req.params["_id"]) return res.status(400).send({ message: "Imcomplete data" });

  const books = await book.findByIdAndUpdate(req.params["_id"], { dbStatus: false });

  return !books
    ? res.status(400).send({ message: "Error deleting book" })
    : res.status(200).send({ message: "Book delete" });
};


const updateBook = async (req, res) => {
  if (!req.body._id || !req.body.nameBook || !req.body.author || !req.body.description || !req.body.secction || !req.body.typePublic || !req.body.priceLeasing || !req.body.priceBook)
    return res.status(400).send({ message: "Imcomplete data" });

  const editBook = await book.findByIdAndUpdate(req.body._id, {
    nameBook: req.body.nameBook,
    author: req.body.author,
    description: req.body.description,
    secction: req.body.secction,
    typePublic: req.body.typePublic,
    priceLeasing: req.body.priceLeasing,
    priceBook: req.body.priceBook,
  });

  if (!editBook) return res.status(500).send({ message: "Error editing book" });
  return res.status(200).send({ message: "Book updated" });
};

export default { registerBook, listBook, deleteBook, updateBook };