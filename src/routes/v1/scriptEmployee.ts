import { Router } from "express";
import { ScriptEmployeeController } from "../../controllers/scriptEmployees/ScriptEmployeeController";

const router = Router();
const controller = new ScriptEmployeeController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;