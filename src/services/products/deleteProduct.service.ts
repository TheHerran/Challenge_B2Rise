import { AppError } from "../../errors/AppError";
import { productsRepository } from "../../utils/repositories";


const deleteProductService = async (id: string): Promise<boolean> => {
    const product = await productsRepository.findOneBy({ id });

    if(!product) {
        throw new AppError(404, "Product not found!");
    }

    await productsRepository.delete(id);

    return true
}

export default deleteProductService