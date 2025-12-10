import { Router } from "express";
import { BookController } from "../../controllers/books/BookController";
import { validatorCreateBook } from "../../middleware/validation/book/validatorCreateBook";

const router = Router();
const controller = new BookController();

router.post("/", validatorCreateBook, (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;