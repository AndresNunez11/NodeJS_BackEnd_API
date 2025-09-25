import { Router } from "express";
import login from "../controllers/Login.Controller.js";
import { check } from "express-validator";
import labels from "../labels.js";
import { validateFieldsRequest } from "../middlewares/validateFields.js";
const router = Router();
router.post('/', [validateFieldsRequest], login);
/*

//Las validaciones se realizan en el middlewares
router.post('/login',
    check('username', labels.empty_field).not().isEmpty(),
    check('password', labels.empty_field).not().isEmpty(),
    check('role', labels.empty_field).not().isEmpty(),
    check('status', labels.empty_field).not().isEmpty(),
    login)
*/
export default router;
//# sourceMappingURL=login.routes.js.map