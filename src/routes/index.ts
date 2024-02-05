import { Express } from "express";
import userRutes from "./User/user.routes";
import productRoutes from "./Products/products.routes";

export const appRoutes = (app: Express) => {
    app.use("/users", userRutes);
    app.use("/products", productRoutes)
}