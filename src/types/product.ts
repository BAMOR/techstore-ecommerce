// types/product.ts
export interface Product {

    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage:number,
    rating: number,
    stock:number,
    brand: string,
    thumbnail: string,
    images: string[]
}

// types/cart.ts
export interface CartItem extends Product{
    quantity: number;
}