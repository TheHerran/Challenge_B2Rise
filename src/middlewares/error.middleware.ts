import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const handleErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            code: err.statusCode,
            message: err.message
        });
    }

    return res.status(500).json({
        status: "error",
        code: 500,
        message: "Internal server error"
    });
}