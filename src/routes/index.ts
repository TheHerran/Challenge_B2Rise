import { Express } from "express";
import userRutes from "./User/user.routes";

export const appRoutes = (app: Express) => {
    app.use("/users", userRutes);
}