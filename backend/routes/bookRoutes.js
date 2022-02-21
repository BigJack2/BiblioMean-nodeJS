import express from "express";
import bookController from "../controllers/bookController.js";
import bookValidate from "../middleware/bookValidate.js";

const router = express.Router();

const existingBook = bookValidate.existingBook;

router.post("/registerBook", existingBook, bookController.registerBook);

router.get("/listBook/:nameBook?", bookController.listBook);

router.put("/deleteBook/:_id", bookController.deleteBook);

router.put("/updateBook", bookController.updateBook);

export default router;