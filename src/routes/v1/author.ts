import { Router } from "express";
import { AuthorController } from "../../controllers/authors/AuthorController";

const router = Router();
const controller = new AuthorController();
router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;