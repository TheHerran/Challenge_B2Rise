import { Router } from "express";
import { handleSchemaUser } from "../../middlewares/schemas/handleSchemaUser.middleware";
import { userRequestSchema } from "../../schemas/userCreate.schema";

import {
    createUserController,
    updateUserController,
    deleteUserController,
    listUsersController,
    getUserController
} from "../../controllers/user.controller";

const userRutes = Router();

userRutes.post("", createUserController);
userRutes.get("", listUsersController);
userRutes.get("/:id", getUserController);
userRutes.patch("/:id", updateUserController);
userRutes.delete("/:id", deleteUserController);

export default userRutes;