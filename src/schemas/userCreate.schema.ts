import * as yup from "yup";
import { Schema } from "yup";
import { IUserRequest } from "../interfaces/user.interface";

export const userRequestSchema: Schema<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
});