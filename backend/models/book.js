import mongoose from "mngoose";

const bookSchema = new mongoose.Schema({
  nameBook: String,
  author: String,
  secction: String,
  typePublic: String,
  priceLeasing: Number,
  priceBook: Number,
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerdate: { tyoe: Date, default: Date.now },
  statusLeasing: Boolean,
  dbstatus: true
});

const book = mongoose.model("books", bookSchema);
export default book;