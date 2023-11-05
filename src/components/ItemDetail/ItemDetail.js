import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount.js"
import { useState } from "react"

function ItemDetail ({ nombre, imagen, categoria, descripcion, precio, stock}){
    const [quantityAdded,setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        
    }


    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Categoria: {categoria}</p>
                <p className="Info">Descripcion: {descripcion}</p>
                <p className="Info">Precio: ${precio}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (<Link to ='/cart' className="Option">Terminar compra</Link>):( 
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            )}
                </footer>
        </article>

    )
}

export default ItemDetail