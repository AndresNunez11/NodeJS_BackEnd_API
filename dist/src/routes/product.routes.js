import { Router } from "express";
import validatejwt from "../middlewares/validatejwt.js";
import { createProducts, deleteProduct, getProducts, getProductsByPrice, updateProduct } from "../controllers/product.controller.js";
import { validateFieldsRequest } from "../middlewares/validateFields.js";
import { check } from "express-validator";
import labels from "../labels.js";
import { productExist } from "../helpers/db.validators.js";
const router = Router();
// el / indica que se van a listar todos los productos
router.get("/", [
    validatejwt("TEC")
], getProducts);
//Lista de productos filtrado por precio
router.get("/byPrice", [validatejwt()], getProductsByPrice);
//Crear un nuevo producto
router.post("/create", [validatejwt("SUP"),
    validateFieldsRequest], createProducts);
//Actualizar un producto
router.put("/update/:id", [validatejwt(),
    check('id', labels.not_valid_id).isMongoId(),
    check('id').custom(productExist),
    validateFieldsRequest
], updateProduct);
//Eliminar un producto
router.delete("/delete/:id", [
    validatejwt(),
    check('id', labels.not_valid_id).isMongoId(),
    check('id').custom(productExist),
    validateFieldsRequest
], deleteProduct);
export default router;
//# sourceMappingURL=product.routes.js.map