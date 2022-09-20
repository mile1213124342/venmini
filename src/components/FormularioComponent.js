import React from 'react'
import "./formulario.css"

export default function FormularioComponent() {
  return (
    <div className='sec'>
        <h5 className='m5'>Dejanos tu</h5>
        <h1>Mensaje</h1>
        <hr></hr>
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Nombre' aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder='Email' id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder='Asunto' id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Mensaje'></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark">Enviar</button>
        </form>
        {window.screen.width}-{window.innerWidth}
    </div>
  )
}
