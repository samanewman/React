import Item from '../Item/Item';
import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import {useContext} from 'react';
import {CartContext} from '../CartContext/CartContext'


const ItemDetail = ({itemd}) => {


    const addItem = useContext(CartContext);

    const add = (counter) =>{   
        if (counter > 0){

            let newItem = { 
                id: parseInt(itemd.itemId),
                nombre : itemd.itemName, 
                cantidad : parseInt(counter)
            }

            addItem(newItem);
            alert(`Tu producto  ${newItem.nombre} se agregó  al carrito.`); 
        }
      };  

return(
    
    <div className = "BoxAllDetails">
        
        
        <div>
            <Item 
                items = {itemd} 
            />
                <ItemCount 
                    stock = {`${itemd.stock}`}
                    initial = {`${itemd.initial}`}
                    add = {add}/> 

        </div>

        <div className = "BoxDetails">
            <div>
            <div className = "BoxListas">{itemd.itemDescription}</div>
                        <div className = "BoxListas">
                            <div>Tamaños:</div>
                            <ul className = "ULista">
                                <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[0]}</label></li>
                                <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[1]}</label></li>
                                <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[2]}</label></li>                            
                                <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[3]}</label></li>
                                <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[4]}</label></li>
                            </ul>
                        </div>
                        <div className = "BoxListas">
                            <div>Colores:</div>
                            <ul className = "ULista">
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[0]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[1]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[2]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[3]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[4]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[5]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[6]}`}}>■</label></li>
                                <li className = "Li"><input type= "radio" name = "color"></input><label style={{color: `${itemd.itemColors[7]}`}}>■</label></li>
                            </ul>
                        </div>  
                        <div>
                            <div>Tenemos cotización sin cargo para todas las formas y colores. Hacemos Factura A y B.</div>
                            <div>✅Toda la cartelería está confeccionada en Neon LED de alta eficiencia.</div>
                            <div>🔌 Utiliza tensión 12v. Incluye fuente de alimentación para conectar a 220v.</div> 
                            <div>Aceptamos 💵 Efectivo, 💳 MercadoPago o ↪️ Transferencia</div>
                            <div>📐Realizamos diseños personalizados.
                                <div>🚚Hacemos Envíos a todo el país.</div>
                            </div>
                        </div> 
            </div>
          </div>

    </div>
    
)
};

export default ItemDetail;