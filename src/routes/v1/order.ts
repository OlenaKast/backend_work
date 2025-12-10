import { Router } from "express";
import { OrderController } from "../../controllers/orders/OrderController";
import { validatorCreateOrder } from "../../middleware/validation/order/validatorCreateOrder";

const router = Router();
const controller = new OrderController();

router.post("/", validatorCreateOrder, (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;