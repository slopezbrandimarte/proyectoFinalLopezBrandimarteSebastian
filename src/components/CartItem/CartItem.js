import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ producto }) => {
    const {borrarProducto} = useContext(CartContext)

    return(
        <div className='container'>
            <picture>
                <img src={producto.imagen} alt={producto.nombre} className='imgContainer'/>

            </picture>
            <div className='productosCategoria'>
                <h2>
                    {producto.nombre}
                </h2>
                <p>
                    Cantidad: {producto.quantity}
                </p>
                <p>
                    Subtotal: {producto.quantity * producto.precio}
                </p>
                <button onClick={()=> borrarProducto(producto.id)}>Eliminar</button>
            </div>
        </div>

    )



}

export default CartItem