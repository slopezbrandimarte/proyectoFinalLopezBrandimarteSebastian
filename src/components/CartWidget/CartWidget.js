import { useContext } from "react"
import cart from "./assets/cart.svg"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


function CartWidget(){
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className="CartImg" src={cart} alt="cart-widget" width="25px" height="auto"/>
            {totalQuantity}
        </Link>

    )
}

export default CartWidget
