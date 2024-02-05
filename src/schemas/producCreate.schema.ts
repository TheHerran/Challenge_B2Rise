import * as yup from "yup";
import { Schema } from "yup";
import { IProductRequest } from "../interfaces/product.interface";

export const productRequestSchema:  Schema<IProductRequest> = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required()
})