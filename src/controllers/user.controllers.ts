import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";
import listUsersService from "../services/user/listUsers.service";
import getUserService from "../services/user/getUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";


export const createUserController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await createUserService({ name, email, password });

    return res.status(201).json(instanceToPlain(user));
}

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();

    return res.status(200).json(instanceToPlain(users));
}

export const getUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserService(id);

    return res.json(instanceToPlain(user));
}

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await updateUserService(id, { name, email, password });

    return res.status(200).json({ message: "User updated successfully!" });
}

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteUserService(id);

    return res.status(204).json();
}

