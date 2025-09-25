import labels from "../labels.js";
import Product from "../models/product.model.js";
export const productExist = async (id) => {
    try {
        const idDB = await Product.findById(id);
        if (!idDB) {
            throw new Error("El producto con id: " + idDB + " no exiete");
        }
    }
    catch (e) {
        console.error(e);
        throw new Error("Fallo en el servidor");
    }
};
//# sourceMappingURL=db.validators.js.map