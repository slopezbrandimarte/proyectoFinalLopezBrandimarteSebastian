import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"

import { getDoc,doc } from "firebase/firestore";
import { db} from "../../services/firebase/firebaseConfig";



const ItemDetailContainer = ()=>{
    
    const[producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()



    
    useEffect(()=> {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productosAdaptados = {id: response.id, ...data}
                setProducto(productosAdaptados)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])
    if (loading) {
        console.log("cargando")
    }
    return(
        <div className="ItemDetailContainer"> 
            <ItemDetail {...producto}/> 
        </div>
    )
    
}

export default ItemDetailContainer