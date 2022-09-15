import React from 'react'
import { Link } from 'react-router-dom'

import iconinsta from "./icons/instagram_black_logo_icon_147122.png"
import iconfacebook from "./icons/social_facebook_fb_35.png"
import iconwhats from "./icons/whatsapp_black_logo_icon_147050.png"
import "./footer.css"

export default function FooterComponent() {
  return (
    <>

    <div style={{border:"5px solid black", margin:"20px"}}>
        <hr style={{marginTop:"50px",marginLeft:"50px",marginRight:"50px"}}></hr>
        <div className="grid-footer" style={{height:"200px"}}>
          <div className="item40">
            <p className='text12' style={{width:"600px", display:"inline-block", fontSize:"23px"}}>
              Encontra todo en nuestras redes sociales, te esperamos en nuestro local
              en Punta Arenas para ofrecerte los mejores productos de calidad y la mejor atención
            </p>
            
          </div>
          <div className="item41">
            
              <h1>Encuentranos aqui</h1>
              <i><img src={iconinsta} style={{width:"50px", marginRight:"5px"}}></img></i>
              <i><img src={iconfacebook} style={{width:"50px", marginRight:"5px"}}></img></i>
              <i href="http://bit.ly/WhatsVenMini"><img src={iconwhats} style={{width:"50px"}}></img></i>
              <h1>Pregunte aquí</h1>
              <a href='' style={{color:"yellow",fontSize:"30px"}}>www.venminimarket.com</a>
          </div>
         
        </div>
        <hr style={{marginLeft:"50px",marginRight:"50px"}}></hr>

        <div className="grid-footer">
          <div className="item42">
            <p style={{width:"600px", display:"inline-block",fontSize:"23px"}}>
              Punta Arenas se encuentra en el extremo sur de Chile, y es 
              la ciudad más poblada y cosmopolita de la Patagonia Chile.
              El local está emplazado en una zona centrica de la ciudad de
              fácil acceso.
            </p>
            
          </div>
          <div className="item43">
            
          <div className="grid-footer2" style={{padding:"0px",height:"200px"}}>
              <div className="item99">

                <ul style={{display:"grid"}} >
                  <Link to="/productos" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Productos</Link>
                </ul>
                
              </div>
              <div className="item100">

                <ul style={{display:"grid"}}>
                  <Link to="/galeria" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Galeria</Link>
                </ul>
        
              </div>
              <div>
              <ul style={{display:"grid"}}>
                  <Link to="/contacto" style={{color:"black",textDecoration:"none",fontSize:"25px"}}>Contacto</Link>
              
                </ul>
              </div>
          </div>
             
          </div>
         
        </div>
    </div>


      <div className='container'>
              <div>

              </div>

              <div>
                
              </div>
      </div>
    </>
    
  )
}
