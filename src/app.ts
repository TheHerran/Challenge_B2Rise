import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { appRoutes } from "./routes";

const app = express();
app.use(express.json());
appRoutes(app);

export default app