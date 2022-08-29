import React from 'react'
import logo from "./images/logo.png";
import background from  "./images/navbar-nosotros.jpeg"
import "./navbar.css"

import {Link} from "react-router-dom"

export default function NavBarComponent() {


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
      color:"white",
      fontSize:"60px",
      marginTop:"50px"
    }

  return (
    <div style={backg}  className="center">
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">

                <a class="navbar-brand" href="#">
                  <img src={logo} className="img-responsive img" width="150px"  alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav" >
                        <li className="nav-item active">
                          <a class="nav-link"style={fontColorNav} href="#">NOSOTROS <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link " href="#" role="button"style={fontColorNav} data-toggle="dropdown" aria-expanded="false">
                            Productos
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item"  href="#">Queso</a>
                            <a class="dropdown-item" href="#">Jamon</a>
                            <a class="dropdown-item" href="#">Embutidos</a>
                            <a class="dropdown-item" href="#">Golosinas</a>
                            
                          </div>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link " href="#" role="button" style={fontColorNav} data-toggle="dropdown" aria-expanded="false">
                            Galeria
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Productos</a>
                            <a class="dropdown-item" href="#">Tienda</a>
                          </div>
                        </li>
                        <li class="nav-item">
                          <Link to="/contacto" class="nav-link" style={fontColorNav}> Contacto</Link>
                        </li>
                  </ul>
                  
                </div>
          </nav>

          <p style={text}>NOSOTROS</p>
    </div>
  )
}
