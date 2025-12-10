import { Router } from "express";
import { EmployeeController } from "../../controllers/employees/EmployeeController";
import { validatorCreateEmployee } from "../../middleware/validation/employee/validatorCreateEmployee";

const router = Router();
const controller = new EmployeeController();

router.post("/", validatorCreateEmployee, (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;