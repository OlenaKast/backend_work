import { Router } from "express";
import { OrderController } from "../../controllers/orders/OrderController";

const router = Router();
const controller = new OrderController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;