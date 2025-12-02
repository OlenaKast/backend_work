import { Router } from "express";
import { EmployeeController } from "../../controllers/employees/EmployeeController";

const router = Router();
const controller = new EmployeeController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;