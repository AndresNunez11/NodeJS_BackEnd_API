import { Router } from "express";
import { validateFieldsRequest } from "../middlewares/validateFields.js";
import validatejwt from "../middlewares/validatejwt.js";
import { createUser } from "../controllers/user.Controller.js";
const router = Router();
router.post("/create", [
    //validatejwt(),
    validateFieldsRequest
], createUser);
export default router;
//# sourceMappingURL=user.routes.js.map