import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use(handleErrorMiddleware)
appRoutes(app);

export default app