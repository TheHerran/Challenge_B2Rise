export interface IProductRequest {
    name: string;
    description: string;
    category: string;
    price: number;
}

export interface IProductUpdate {
    name?: string;
    description?: string;
    category?: string;
    price?: number;
}