import { Router } from "express";
import { GenreController } from "../../controllers/genres/GenreController";

const router = Router();
const controller = new GenreController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;