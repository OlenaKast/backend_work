import { Router } from "express";
import { BookController } from "../../controllers/books/BookController";

const router = Router();
const controller = new BookController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;