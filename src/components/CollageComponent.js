import React from 'react'
import img1 from './productos/Embutidos cocidos y crudos/01.jpg';
import img2 from './productos/Embutidos cocidos y crudos/02.jpg';
import img3 from './productos/Embutidos cocidos y crudos/03.jpeg';
import img4 from './productos/Embutidos cocidos y crudos/04.jpg';
import img5 from './productos/Embutidos cocidos y crudos/05.jpg';

import './collage.css'

export default function CollageComponent() {
    
  return (
    <div className='containerC'>


        <div className='containerC2'>
              <img className='imgC1' src={img2}/>
              <img className='imgC2' src={img1}/>
              <img className='imgC3' src={img3}/>
              <img className='imgC4' src={img4}/>
              <img className='imgC5' src={img5}/>
        </div>
        
    </div>
  )
}
