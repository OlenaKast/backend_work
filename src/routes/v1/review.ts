import { Router } from "express";
import { ReviewController } from "../../controllers/reviews/ReviewController";
import { validatorCreateReview } from "../../middleware/validation/review/validatorCreateReview";

const router = Router();
const controller = new ReviewController();

router.post("/", validatorCreateReview, (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;