import { Products } from "../../entities/products/product.entity";
import { AppError } from "../../errors/AppError";
import { productsRepository } from "../../utils/repositories";

const listProductsByCategoryService = async (category: string): Promise<Products[]> => {
    const products = await productsRepository.findBy({ category });

    if (!products) {
        throw new AppError(404, "Not found products in this category!");
    };

    return products;
}

export default listProductsByCategoryService;