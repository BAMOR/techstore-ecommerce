import { productApi } from "../api/product.api";
import type { Product } from "../types/product";





export const getProducts = async():Promise<Product[]>=> {
    const {data} = await productApi.get( '/product')

    return data.products;



    
}