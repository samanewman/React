import { createContext } from 'react/cjs/react.development';
import {useState} from 'react';

export const CartContext = createContext();

export const ItemsProvider = ({children}) =>{
  
    const [carrito, setCarrito] = useState ([
        
    ]);

    const addItem = (newItem) =>{

        const newitemcarrito = carrito.find(
            (item) => 
                newItem.id === item.id 
        );

        if(newitemcarrito){
            newitemcarrito.cantidad = newitemcarrito.cantidad + newItem.cantidad;
        }else{
            carrito.push(newItem); 
        }
        setCarrito([...carrito]);
    };

    console.log(carrito);

    //const deleteItem = () =>{
        
    //}
    
    return <CartContext.Provider value = {addItem}>
        {children}

    </CartContext.Provider>;
};
