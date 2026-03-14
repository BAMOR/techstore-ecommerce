import type { Product } from "../types/product";

// Tipos
export type cartItem = Product & { quantity: number }

export type CartActions =
    | { type: 'add-to-cart', payload: { item: Product } }
    | { type: 'remove-from-cart', payload: { id: Product['id'] } }
    | { type: 'decrease-quantity', payload: { id: Product['id'] } }
    | { type: 'clear-cart' }

export type cartState = {
    cart: cartItem[]
}

// Funciones de persistencia (como en tu BudgetReducer)
const initialCart = () : cartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState: cartState = {
    cart: initialCart()
}

// Reducer
export const cartReducer = (
    state: cartState = initialState,
    action: CartActions,
): cartState => {

    if (action.type === 'add-to-cart') {
        const itemExist = state.cart.find(p => p.id === action.payload.item.id)
        
        let updatedCart: cartItem[] = []

        if (itemExist) {
            updatedCart = state.cart.map(p =>
                p.id === action.payload.item.id 
                    ? { ...p, quantity: p.quantity + 1 } 
                    : p
            )
        } else {
            const newItem: cartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
       return {
        ...state,
        cart: state.cart.filter(p=> p.id !== action.payload.id)
       }
    }

    if (action.type === 'decrease-quantity') {
        const item = state.cart.find(p=> p.id === action.payload.id)

        if(item && item.quantity > 1) {
            return{
                ...state,
                cart: state.cart.map(p=>
                    p.id === action.payload.id
                    ? {...p, quantity:p.quantity -1}:p
                )
            }
        }

        return{
            ...state,
            cart: state.cart.filter(p=> p.id !== action.payload.id)
        }
 
        
    }

    if (action.type === 'clear-cart') {
        return{
            ...state,
            cart: []
        }
    }

    return state
}