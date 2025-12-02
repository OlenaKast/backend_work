import { Router } from "express";
import { ReviewController } from "../../controllers/reviews/ReviewController";

const router = Router();
const controller = new ReviewController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;