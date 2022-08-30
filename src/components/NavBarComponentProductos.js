import React from 'react'
import logo from "./images/logo.png";
import background from  "./images/navbar-productos.jpg"
import "./navbar.css"

export default function NavBarComponentProductos() {

    const centermynav = {
        position: "absolute",
        left: "50%",
        transform: "translatex(-50%)",
      }
  
      const fontColorNav = {
          color:"black",
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
    <div>
         <div style={backg}  className="center">
        <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong center">

                <a className="navbar-brand" href="#">
                  <img src={logo} className="img-responsive img" width="150px"  alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" style={{marginRight:"50px",color:"black"}} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav navbar-center" >
                        <li className="nav-item active">
                          <a className="nav-link"style={fontColorNav} href="#">NOSOTROS <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link " href="#" role="button"style={fontColorNav} data-toggle="dropdown" aria-expanded="false">
                            Productos
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item"  href="#">Queso</a>
                            <a className="dropdown-item" href="#">Jamon</a>
                            <a className="dropdown-item" href="#">Embutidos</a>
                            <a className="dropdown-item" href="#">Golosinas</a>
                            
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link " href="#" role="button" style={fontColorNav} data-toggle="dropdown" aria-expanded="false" >
                            Galeria
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Productos</a>
                            <a className="dropdown-item" href="#">Tienda</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" style={fontColorNav}>Contacto</a>
                        </li>
                  </ul>
                  
                </div>
          </nav>

          <p style={text}>PRODUCTOS</p>
    </div>
    </div>
  )
}
