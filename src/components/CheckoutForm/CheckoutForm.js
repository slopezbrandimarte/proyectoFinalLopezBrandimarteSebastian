import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (e)=>{
    e.preventDefault()
    
    const userData = {
      nombre,
      telefono,
      email
    }
    console.log("nombre", nombre)
    console.log("telefono", telefono)
    console.log("email", email)

    onConfirm(userData)
    }

    return (
      <div className="container">
        <form onSubmit={handleConfirm} className="form">
          <label className="label">
              Nombre
            <input className="input" type="text" value={nombre} onChange={({ target}) => setNombre(target.value)}/>
          </label>
          <label className="label">
            Telefono
            <input className="input" type="text" value={telefono} onChange={({ target}) => setTelefono(target.value)}/>
          </label>
          <label className="label">
            Email
            <input className="input" type="text" value={email} onChange={({ target}) => setEmail(target.value)}/>
          </label>
          <div className="label">
            <button className="button" type="submit">Crear orden</button>
          </div>
        </form>
      </div>
    )
  }



export default CheckoutForm