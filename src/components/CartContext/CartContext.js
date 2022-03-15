import React, {useState} from 'react'
import { createContext } from 'react/cjs/react.development';

export const CartContext = createContext();

const initialstate = [{cantidad:0,  compra: []}];

export const ItemsProvider = ({children}) =>{
    const [items, setItems] = useState(initialstate);

    return <CartContext.Provider value = {[items, setItems]}>
        {children}
    </CartContext.Provider>;
}
