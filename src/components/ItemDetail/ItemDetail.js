import React, {useState} from 'react'
import Item from '../Item/Item'
import './ItemDetail.css'

const ItemDetail = ({itemd}) => {
    
    const [show, setShow] = useState(true);

return(
    <div className = "BoxAllDetails">
        <div>
            <Item 
            items = {itemd} />
        </div>
        {show ?(<div></div>):(
            <div className = "BoxDetails">
                <div>
                            <div className = "BoxListas">{itemd.itemDescription}</div>
                            <div>Precio: {itemd.itemPrice}</div>
                            <div className = "BoxListas">
                                <div>Tamaños:</div>
                                <ul className = "ULista">
                                    <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[0]}</label></li>
                                    <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[1]}</label></li>
                                    <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[2]}</label></li>                            <li className = "Li"><input type= "radio" name = "tamaños"></input><label>{itemd.itemSize[3]}</label></li>
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
            </div>)}
        <div className = "BoxBotonDetalle">
                <button className = "BotonDetalle" onClick={() => {setShow(!show);}}>{show ? 'Ver mas detalles':'Ocultar detalles'}</button>
        </div>
    </div>
    
)
};

export default ItemDetail;