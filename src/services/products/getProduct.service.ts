import { Products } from "../../entities/products/product.entity";
import { AppError } from "../../errors/AppError";
import { productsRepository } from "../../utils/repositories";


const getProductService = async (id: string): Promise<Products> => {
    const product = await productsRepository.findOne({ where: { id: id } });

    if (!product) {
        throw new AppError(404, "Product not found!");
    };

    return product;
}

export default getProductService;