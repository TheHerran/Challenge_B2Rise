import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";


const createUserController = async (req: Request, res: Response) => {
    const { name, email, password } = req.newUser;
    const user = await createUserService({ name, email, password });

    return res.status(201).json(instanceToPlain(user))
}