import { createContext } from 'react/cjs/react.development';
import {useState} from 'react';

export const CartContext = createContext();

export const ItemsProvider = ({children}) =>{
  
    const [carrito, setCarrito] = useState ([
        
    ]);

    const addItem = (newItem) =>{

        const newitemcarrito = carrito.find(
            (item) => 
                newItem.id === item.id && newItem.size === item.size && newItem.color === item.color
        );

        if(newitemcarrito){
            newitemcarrito.cantidad = newitemcarrito.cantidad + newItem.cantidad;
            newitemcarrito.precio = newitemcarrito.precio + newItem.precio;
        }else{
            carrito.push(newItem); 
        }
        setCarrito([...carrito]);
    };

    console.log(carrito);

    const removeItem = (newItem) =>{
        const newitemcarrito = carrito.filter( 
            (item) => item.id !== newItem.id
        );
        setCarrito(newitemcarrito);
    }

    const clear = (carrito) =>{

        carrito.length = 0;
        const newitemcarrito = carrito;
        setCarrito(newitemcarrito);
    }
    
    return <CartContext.Provider value = {{ addItem, removeItem, clear, carrito, setCarrito }}>
        {children}

    </CartContext.Provider>;
};
