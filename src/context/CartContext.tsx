import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialState, type CartActions, type cartState } from "../reducer/CartReducer";


interface CartContextProps {
    state: cartState,
    dispatch: React.Dispatch<CartActions>
}
type CartProviderProps = {
    children:React.ReactNode
}



export const CartContext = createContext<CartContextProps>(null!)

export const CartProvider = ({children}:CartProviderProps) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(state.cart))

    },[state.cart])

    return (
        <CartContext.Provider value={ {state,dispatch}}>
            {children}

        </CartContext.Provider>
    )

}