import { Router } from "express";
import { ScriptController } from "../../controllers/scripts/ScriptController";

const router = Router();
const controller = new ScriptController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;