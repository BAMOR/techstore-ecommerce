import { productApi } from "../api/product.api";
import type { Product } from "../types/product";



interface ProductResponse {
    products: Product[],
    total: number,
    skip:number,
    limit:number
}

export const getProducts = async():Promise<Product[]>=> {
    const {data} = await productApi.get<ProductResponse>( '/product')

    return data.products;



    
}