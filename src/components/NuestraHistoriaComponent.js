import React ,{useEffect} from 'react'
import './nuestrahistoria.css'
import sec1img from "./historia/historia3.png"
import sec2img from "./historia/historia1.png"
import sec3img from "./historia/historia2.png"
import sec4img from "./historia/historia4.jpg"
import sec5img from "./historia/historia5.png"

import Aos from 'aos';
import "aos/dist/aos.css";

export default function NuestraHistoriaComponent() {

  useEffect(()=>{
      Aos.init({
        duration:2000
      });
  },[])
  

  return (
    <div>
          <div>
                <h2 className='titulo'>Ciudadanos del mundo</h2>
                <hr className='line'/>           
          </div>

          <div data-aos="fade-up" style={{marginTop:"200px"}}>
                  <h1>Hola fer</h1>
          </div>
        
    </div>
  )
}
