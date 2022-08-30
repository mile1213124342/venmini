import React from 'react'
import { Link } from 'react-router-dom'

import iconinsta from "./icons/instagram_black_logo_icon_147122.png"
import iconfacebook from "./icons/social_facebook_fb_35.png"
import iconwhats from "./icons/whatsapp_black_logo_icon_147050.png"
import "./footer.css"

export default function FooterComponent() {
  return (
    <div style={{border:"5px solid black", margin:"20px"}}>
        <hr style={{marginTop:"50px",marginLeft:"50px",marginRight:"50px"}}></hr>
        <div className="grid-container" style={{height:"230px"}}>
          <div className="item1">
            <p className='text1' style={{width:"600px", display:"inline-block"}}>
              Encontra todo en nuestras redes sociales, te esperamos en nuestro local
              en Punta Arenas para ofrecerte los mejores productos de calidad y la mejor atención
            </p>
            
          </div>
          <div className="item2">
            
              <h1>Encuentranos aqui</h1>
              <i><img src={iconinsta} style={{width:"50px", marginRight:"5px"}}></img></i>
              <i><img src={iconfacebook} style={{width:"50px", marginRight:"5px"}}></img></i>
              <i href="http://bit.ly/WhatsVenMini"><img src={iconwhats} style={{width:"50px"}}></img></i>
              <h1>Pregunte aquí</h1>
              <a href='' style={{color:"yellow"}}>www.venminimarket.com</a>
          </div>
         
        </div>
        <hr style={{marginLeft:"50px",marginRight:"50px"}}></hr>

        <div className="grid-container">
          <div className="item1">
            <p style={{width:"600px", display:"inline-block"}}>
              Punta Arenas se encuentra en el extremo sur de Chile, y es 
              la ciudad más poblada y cosmopolita de la Patagonia Chile.
              El local está emplazado en una zona centrica de la ciudad de
              fácil acceso.
            </p>
            
          </div>
          <div className="item2">
            
          <div className="grid-container" style={{padding:"0px",height:"200px"}}>
          <div className="item1">
            <ul style={{display:"grid"}} >
              <Link to="/productos" style={{color:"black",textDecoration:"none"}}>PRODUCTOS</Link>
              <Link  to="/productos" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Quesos</Link>
              <Link  to="/productos" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Fiambres</Link>
              <Link  to="/productos" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Embutidos</Link>
              <Link  to="/productos" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Golosinas</Link>
            </ul>
            
          </div>
          <div className="item2">

            <ul style={{display:"grid"}}>
              <Link to="/galeria" style={{color:"black",textDecoration:"none"}}>Galeria</Link>
              <Link to="/" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Equipo</Link>
              <Link to="/" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Sumate</Link>
            </ul>
    
          </div>
         
        </div>
             
          </div>
         
        </div>
    </div>
  )
}
