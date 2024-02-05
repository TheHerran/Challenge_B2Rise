import { Router } from "express";
import { 
    createProductController, 
    deleteProductController, 
    getProductController, 
    listProductsByCategoryController, 
    listProdutsController, 
    updateProductController 
} from "../../controllers/products.controllers";

const productRoutes = Router();

productRoutes.post("", createProductController);
productRoutes.get("", listProdutsController);
productRoutes.get("/categories/:category", listProductsByCategoryController);
productRoutes.get("/item/:id", getProductController);
productRoutes.patch("/:id", updateProductController)
productRoutes.delete("/:id", deleteProductController)

export default productRoutes;