import React from 'react'
import "./map.css"
export default function MapComponent() {
  return (
    
    <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.8369778853025!2d-70.92359758255617!3d-53.1669643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb2636615af29a7%3A0xd2887d71a68008cc!2sEspana%20-%20Av.%20Espa%C3%B1a%201778%2C%20Punta%20Arenas%2C%206201325%2C%20Magallanes%20y%20la%20Ant%C3%A1rtica%20Chilena%2C%20Chile!5e0!3m2!1ses-419!2sar!4v1661784332475!5m2!1ses-419!2sar" 
          width="100%" height="450" frameBorder="0" 
          style={{border:0}} allowFullScreen="" aria-hidden="false"
           tabIndex="0"></iframe>
    </div>
    
  )
}
