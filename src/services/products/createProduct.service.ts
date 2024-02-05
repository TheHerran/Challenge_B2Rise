import { Products } from "../../entities/products/product.entity";
import { IProductRequest } from "../../interfaces/product.interface";

import { productsRepository } from "../../utils/repositories";


const createProductService = async ({
    name, category, description, price
}: IProductRequest): Promise<Products> => {
    const newProduct = productsRepository.create({
        name, category, description, price
    });

    await productsRepository.save(newProduct);

    return newProduct;
}


export default createProductService;