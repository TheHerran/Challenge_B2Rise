import { IProductUpdate } from "../../interfaces/product.interface";
import { productsRepository } from "../../utils/repositories";
import { AppError } from "../../errors/AppError";


const updateProductService = async (id: string, {
    name, description, price, category
}: IProductUpdate): Promise<boolean> => {

    if (!name && !category && !price && !description) {
        throw new AppError(400, "Not a key has been given!");
    }

    const productList = await productsRepository.find()
    const product = productList.find((product) => product.id === id)

    if (!product) {
        throw new AppError(404, "Product not found!");
    }

    await productsRepository.update(id, {
        name: name ? name : product?.name,
        description: description ? description : product?.description,
        category: category ? category : product.category,
        price: price ? price : product.price
    })

    return true;
}

export default updateProductService;