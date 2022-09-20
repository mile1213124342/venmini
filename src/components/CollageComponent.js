import React from 'react'
import img1 from './productos/Embutidos cocidos y crudos/01.jpg';
import img2 from './productos/Embutidos cocidos y crudos/02.jpg';
import img3 from './productos/Embutidos cocidos y crudos/03.jpeg';
import img4 from './productos/Embutidos cocidos y crudos/04.jpg';
import img5 from './productos/Embutidos cocidos y crudos/05.jpg';

import img6 from './productos/Collage/_JEJ2280.jpg'
import img7 from './productos/Collage/quesollaneroduro.jpg'
import img8 from './productos/Collage/09.jpg'

import img9 from './productos/Collage/11.jpg'
import img10 from './productos/Collage/12.jpg'
import img11 from './productos/Collage/13.jpg'
import img12 from './productos/Collage/14.jpg'


import './collage.css'

export default function CollageComponent() {
    
  return (
    <div className='containerC'>

        <div className='containerC2'>
              <img className='imgC1' src={img2}/>
              <img className='imgC2' src={img1}/>

        </div>
        <div className='containerC3'>
              <img className='imgC3' src={img3}/>
        </div>
        <div className='containerC4'>
              <img className='imgC4' src={img4}/>
              <img className='imgC5' src={img5}/>
              <img className='imgC5' src={img6}/>
              <img className='imgC5' src={img7}/>
        </div>

        <div className='containerC5'>
            <img className='imgC6' src={img8}/>
        </div>

        <div className='containerC4'>
              <img className='imgC4' src={img9}/>
              <img className='imgC5' src={img10}/>
              <img className='imgC5' src={img11}/>
              <img className='imgC5' src={img12}/>
        </div>
      
      <div>
            
      </div>
    </div>
  )
}
