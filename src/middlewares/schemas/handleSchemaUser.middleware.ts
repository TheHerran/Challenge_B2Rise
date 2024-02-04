import { Request, NextFunction } from "express";
import { Schema } from "yup";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user.interface";

export const handleSchemaUser = (schema: Schema<IUserRequest>) =>
    async (req: Request, next: NextFunction) => {
        try {
            const data = req.body;
            const validatedData = await schema.validate(data, {
                abortEarly: false,
                stripUnknown: true,
            });

            req.user = validatedData;

            next();
        } catch (err: any) {
            if (err) {
                throw new AppError(400, err.errors?.join(", ") as string);
            }
        }
    }