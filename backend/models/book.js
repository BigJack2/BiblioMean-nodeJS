import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  nameBook: String,
  author: String,
  description: String,
  secction: String,
  typePublic: String,
  priceLeasing: Number,
  priceBook: Number,
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerDate: { type: Date, default: Date.now },
  statusLeasing: Boolean,
  dbStatus: Boolean,
});

const book = mongoose.model("books", bookSchema);
export default book;