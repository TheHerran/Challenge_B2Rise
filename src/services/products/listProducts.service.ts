import { Products } from "../../entities/products/product.entity";
import { productsRepository } from "../../utils/repositories";


const listProductsService = async (): Promise<Products[]> => {
    const products = await productsRepository.find();

    return products;
}

export default listProductsService;