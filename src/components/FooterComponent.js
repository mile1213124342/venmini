import React from 'react'
import { Link } from 'react-router-dom'
import iconinsta from "./icons/instagram_black_logo_icon_147122.png"
import iconfacebook from "./icons/social_facebook_fb_35.png"
import iconwhats from "./icons/whatsapp_black_logo_icon_147050.png"
import "./footer.css"

export default function FooterComponent() {
  return (
    <>
    <div className='containerFooter' >
      <div className='container1'>

        <div className='tex21'>
            <p className='text12'>
              Encontra todo en nuestras redes sociales, te esperamos en nuestro local
              en Punta Arenas para ofrecerte los mejores productos de calidad y la mejor atención
            </p>
        </div>

        <div className='iconsA'>
            <h1 style={{fontSize:"30px"}}>Encuentranos aqui</h1>  
            <a  href="https://www.instagram.com/venminimarket/"><i><img src={iconinsta} style={{width:"50px", marginRight:"5px"}}></img></i></a>
            <a  href="https://www.facebook.com/minimarket.ven"><i><img src={iconfacebook} style={{width:"50px", marginRight:"5px"}}></img></i></a>
            <a  href="http://bit.ly/WhatsVenMini"><i><img src={iconwhats} style={{width:"50px", marginRight:"5px"}}></img></i></a>
            <h1 style={{fontSize:"30px"}}>Pregunte aquí</h1>
            <a href='www.venminimarket.com/contacto' style={{color:"yellow",fontSize:"30px"}}>www.venminimarket.com</a>
        </div>

      </div>

      <div className='try'>
            <div className='container2'>
                <div className='textf' >

                      <p className='textf1'>
                        Punta Arenas se encuentra en el extremo sur de Chile, y es 
                        la ciudad más poblada y cosmopolita de la Patagonia Chile.
                        El local está emplazado en una zona centrica de la ciudad de
                        fácil acceso.
                      </p>
                      
                </div>

                <div className='listf'>
                        <div>
                          <ul>
                            <Link to="/productos" style={{color:"white",textDecoration:"none",fontSize:"25px"}}>Productos</Link>
                          </ul>
                          <ul>
                            <Link to="/galeria" style={{color:"white",textDecoration:"none",fontSize:"25px"}}>Galeria</Link>
                          </ul>
                          <ul>
                              <Link to="/contacto" style={{color:"white",textDecoration:"none",fontSize:"25px"}}>Contacto</Link>
                          </ul>
                        </div>
                </div>
            </div>
      </div>
    </div>
    </>
    
  )
}
