import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { getDocs,collection,query,where, } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import "./ItemListContainer.css"



const  ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    



    useEffect(()=>{
        const collectionRef = collection(db,'items')

        const p = categoriaId ? query(collectionRef, where("categoria", "==", categoriaId)) : collectionRef

        getDocs(p)
        .then((response)=>{

            setProductos(
                response.docs.map((doc)=>{
                    return{...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoriaId])

    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>

            <section>
                <ItemList productos={productos}/>
            </section>
        </div>
    )

}

export default ItemListContainer;