import express from "express";
import bookController from "../controllers/bookController.js";
import bookValidate from "../middleware/bookValidate.js";

const router = express.Router();

const existingBook = bookValidate.existingBook;

router.post("/registerBook", existingBook, bookController.registerBook);

router.get("/listBook/:nameBook?", bookController.listBook);

export default router;