import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "../firebase"


function Auth (){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const singIn = async()=>{
        await createUserWithEmailAndPassword(auth, email, password)

    }
    const singInWithGoogle = async()=>{
        await signInWithPopup(auth,googleProvider)
    }

    const logOut = async()=>{
        await signOut(auth)
    }


    return(

        <div>
            <p>Usuario: {auth?.currentUser?.email}</p>

            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={singIn}>Ingresar</button>

            <button onClick={singInWithGoogle}>Ingresar con Google</button>


            <button onClick={logOut}>log out</button>
        </div>
    )



}

export default Auth