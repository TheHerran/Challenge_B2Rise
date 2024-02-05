import AppDatasource from "../data-source";
import { User } from "../entities/user/user.entity";
import { Products } from "../entities/products/product.entity";
import { Order } from "../entities/orders/orders.entity";

export const userRepository = AppDatasource.getRepository(User);
export const productsRepository = AppDatasource.getRepository(Products);
export const orderRepository = AppDatasource.getRepository(Order);

