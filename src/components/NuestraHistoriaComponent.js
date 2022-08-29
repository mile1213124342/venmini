import React from 'react'
import './nuestrahistoria.css'

export default function NuestraHistoriaComponent() {
  return (
    <div style={{}}>
        <h2 className='titulo'>Ciudadanos del mundo</h2>

          <hr className='line'/>

        <div className="grid-container">
          <div className="item1">
            <img style={{width:"600px",height:"600px",border:"3px solid black"}} alt="imagen"/>
            
          </div>
          <div className="item2">
            
              <p>
              En este breve relato queremos contarles una hermosa historia y el porqué seguimos adelante con ella, poniéndole mucha pasión, como expresión superlativa del amor fraternal.
              </p>
              <hr/>
              <p>
              Había una vez en un lugar remoto del mundo a pasos de la Antártica, en la ciudad de Punta Arenas; cabecera de la Región de Magallanes, ciudad de inmigrantes yugoslavos y de pueblos originarios, conocida mundialmente por su privilegiada belleza geográfica lo cual hace que sea visitada por muchas personas del mundo y diversas culturas.
              </p>
              <hr/>
              <p>
              En el inmenso Estrecho de Magallanes siempre se divisan cruceros de diversas nacionalidades. 
              </p>
          </div>
         
        </div>

    
        
    </div>
  )
}
