import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection,getDocs, query, where, writeBatch } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import {db} from "../../services/firebase/firebaseConfig"


const Checkout = () =>{
  const [loading, setLoading] = useState(false)
  const [ordenId, setOrdenId] = useState('')

  const { cart, total, clearCart} = useContext(CartContext)

  const crearOrden = async ({ nombre, telefono, email }) =>{
    setLoading(true);

    try{
      const objetoOrden = {
        comprador:{
          nombre, telefono, email
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)    
      
      const productosRef = collection(db, 'items')

      const productosAgregadosDeFirestore = await getDocs(query(productosRef, where('id', 'in',ids )))
    
      console.error('el array de IDs esta vacio')

      const {docs} = productosAgregadosDeFirestore

      docs.forEach(doc =>{
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productoAgregadoACarrito = cart.find(prod=>prod.id === doc.id)
        const prodQuantity = productoAgregadoACarrito?.quantity

        if(stockDb < prodQuantity){
          batch.update(doc.ref,{ stock: stockDb - prodQuantity})
        }else{
          outOfStock.push({id: doc.id, ...dataDoc})
        }
    })
      if(outOfStock.length === 0){
        await batch.commit()

        const ordenRef = collection (db, 'ventas')

        const agregarOrden = await addDoc(ordenRef, objetoOrden)
        setOrdenId(agregarOrden.id)
        clearCart()
      }else{
        console.error('hay productos que estan fuera de stock')
      }
      
    }catch (error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  if(loading){
      return <h1>Se esta generando su orden...</h1>
  }
  if(ordenId){
    return <h1>El id de su orden es : {ordenId}</h1>
  }
  return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm = {crearOrden} />
    </div>
  )

}


export default Checkout