import { Request, Response } from "express";
import { IProductRequest, IProductUpdate } from "../interfaces/product.interface";
import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";
import updateProductService from "../services/products/updateProduct.service";
import getProductService from "../services/products/getProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";

export const createProductController = async (req: Request, res: Response) => {
    const { name, category, description, price }: IProductRequest = req.body;
    const product = await createProductService({ name, category, description, price });

    return res.status(201).json({ message: "Product created successfully!", ...product });
}

export const getProductController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductService(id)

    return res.status(200).json(product)
}

export const listProdutsController = async (req: Request, res: Response) => {
    const products = await listProductsService();

    return res.status(200).json(products);
}

export const listProductsByCategoryController = async (req: Request, res: Response) => {
    const { category } = req.params;
    const productsByCategory = await listProductsByCategoryService(category);

    return res.status(200).json(productsByCategory);
}

export const updateProductController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, category, price }: IProductUpdate = req.body;

    await updateProductService(id, { name, description, category, price });

    return res.status(200).json({ message: "Product updated succsessfully!" });
}

export const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteProductService(id);

    return res.status(204).json();
}
