import { Router } from "express";
import { UserController } from "../../controllers/users/UserController";
import { validatorCreateUser } from "../../middleware/validation/user/validatorCreateUser";
const router = Router();
const controller = new UserController();
router.post("/", validatorCreateUser, (req, res, next) => controller.create(req, res, next));

router.get("/", (req, res, next) => controller.getAll(req, res, next));

export default router;