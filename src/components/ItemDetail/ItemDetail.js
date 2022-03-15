import Item from '../Item/Item';
import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import {useContext} from 'react';
import {CartContext} from '../CartContext/CartContext'

const ItemDetail = ({itemd}) => {

    const[items, setItems] = useContext(CartContext);

    const add = (counter) =>{
        
        if (counter > 0){
            setItems([itemd, counter])
            alert(`Se agregaron ${counter} productos.`); 
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
                            <p>Tenemos cotización sin cargo para todas las formas y colores. Hacemos Factura A y B.</p>
                            <div>✅Toda la cartelería está confeccionada en Neon LED de alta eficiencia.</div>
                            <div>🔌 Utiliza tensión 12v. Incluye fuente de alimentación para conectar a 220v.</div> 
                            <p>Aceptamos 💵 Efectivo, 💳 MercadoPago o ↪️ Transferencia</p>
                            <p>📐Realizamos diseños personalizados.
                                <div>🚚Hacemos Envíos a todo el país.</div>
                            </p>
                        </div> 
            </div>
          </div>

    </div>
    
)
};

export default ItemDetail;