import React from 'react'
import logo from "./images/logo.png";
import background from  "./images/navbar-productos.jpg"
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function NavBarComponentProductos() {

    const centermynav = {
        position: "absolute",
        left: "50%",
        transform: "translatex(-50%)",
      }
  
      const fontColorNav = {
          color:"white",
          fontSize:"25px",
      }
    
      const backg = {
        backgroundImage:`url(${background})` ,
        WebkitBackgroundSize:"cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize:"cover",
        height:"564px",
        width:"100%",
      }
  
      const text = {
        color:"black",
        fontSize:"60px",
        marginTop:"50px"
      }

  return (
    <div style={backg}  className="center">
    <div className='back-color'>

      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong center">

              <a className="navbar-brand" href="#">
                <img src={logo} className="img-responsive img" width="150px"  alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse center" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-center" >
                      <li className="nav-item active">
                        <Link to="/nosotros" className="nav-link" style={fontColorNav}>Nosotros</Link>
                      </li>
                      <li className="nav-item dropdown">
                       
                        <Link to="/productos" className="nav-link" style={fontColorNav}>Productos</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link to="/galeria" className="nav-link" style={fontColorNav}>Galeria</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contacto" className="nav-link" style={fontColorNav}>Contacto</Link>
                      </li>
                </ul>
                
              </div>
        </nav>

        <p  className="titulo-sec">PRODUCTOS</p>

    </div>
  </div>
  )
}
