import "./Item.css"
import { Link } from "react-router-dom"

function Item ({id, nombre, imagen, precio, stock}){
    console.log(stock)

    return(
        <article className="CardItem">
            <header className="CardItemHeader">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture className="Imagen">
                <img src={imagen} alt={nombre} className="ItemImg"/> 
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="CardItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item