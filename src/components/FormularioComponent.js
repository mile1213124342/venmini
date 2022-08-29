import React from 'react'
import "./formulario.css"

export default function FormularioComponent() {
  return (
    <div className='sec '>
        <h5 className='m5'>Dejanos tu</h5>
        <h1>Mensaje</h1>
        <hr></hr>
        <form>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Nombre' aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder='Email' id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder='Asunto' id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder='Mensaje' id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
  )
}
