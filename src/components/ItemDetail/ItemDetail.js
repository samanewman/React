import React, {useState} from 'react'
import Item from '../Item/Item'

const ItemDetail = ({itemd}) => {
    
    const [show, setShow] = useState(false);

return(
    <div className = "BoxAllDetails">
        <div>
            <Item 
            items = {itemd} />
        </div>
        <div>
            {show ?(
            <div className = "BoxDetails">       
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
                    <div>Precio: {itemd.itemPrice}</div>
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
                    </div>  
                ):(<div></div>)}
            </div>
            <div className = "BoxBotonDetalle">
                <button className = "BotonDetalle" onClick={() => {setShow(!show);}}>{show ? 'Ocultar detalles' : 'Ver detalles'}</button>
            </div>
    </div>
    
)
};

export default ItemDetail;