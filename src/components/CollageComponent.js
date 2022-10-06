import React from 'react'
import img1 from './productos/Embutidos cocidos y crudos/01.jpg';
import img2 from './productos/Embutidos cocidos y crudos/02.jpg';
import img3 from './productos/Embutidos cocidos y crudos/111.jpeg';
import img4 from './productos/Embutidos cocidos y crudos/04.jpg';
import img5 from './productos/Embutidos cocidos y crudos/06.jpg';

import img6 from './productos/Embutidos cocidos y crudos/07.jpeg';
import img7 from './productos/Embutidos cocidos y crudos/08.jpg';
import img8 from './productos/Embutidos cocidos y crudos/10.jpg';

import img9 from './productos/Embutidos cocidos y crudos/11.jpg';
import img10 from './productos/Embutidos cocidos y crudos/12.jpeg';
import img11 from './productos/Embutidos cocidos y crudos/15.jpg';
import img12 from './productos/Embutidos cocidos y crudos/16.jpg';

import img13 from './productos/Embutidos cocidos y crudos/Budare Redondo.jpg';

import img14 from './productos/Embutidos cocidos y crudos/IMG_8261.jpg';
import img15 from './productos/Embutidos cocidos y crudos/IMG_8485.jpg';
import img16 from './productos/Embutidos cocidos y crudos/IMG_8489.jpg';
import img17 from './productos/Embutidos cocidos y crudos/IMG_8490.jpg';

import img18 from './productos/Embutidos cocidos y crudos/Mortadella pistachio y aceitunas .jpg';

import img19 from './productos/Embutidos cocidos y crudos/03.jpg';
import img20 from './productos/Embutidos cocidos y crudos/35.jpeg';



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

            <div className='containerC5'>
                  <img className='imgC6' src={img13}/>
            </div>

            <div className='containerC4'>
                  <img className='imgC4' src={img14}/>
                  <img className='imgC5' src={img15}/>
                  <img className='imgC5' src={img16}/>
                  <img className='imgC5' src={img17}/>
            </div>

            <div className='containerC7'>
                  <div className='containerC2'>
                        <img className='imgC1' src={img18}/>
                        <img className='imgC2' src={img19}/>

                  </div>
                  <div className='containerC8'>
                        <img className='imgC3' src={img20}/>
                  </div>
            </div>
      </div>
  )
}
