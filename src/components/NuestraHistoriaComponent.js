import React from 'react'
import './nuestrahistoria.css'
import sec1img from "./historia/historia3.png"
import sec2img from "./historia/historia1.png"
import sec3img from "./historia/historia2.png"
import ScrollMagic from "scrollmagic";


export default function NuestraHistoriaComponent() {

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#trigger0",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1// move trigger to center of element
  })
  .setClassToggle("#reveal0", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "130%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1// move trigger to center of element
  })
  .setClassToggle("#reveal1", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1// move trigger to center of element
  })
  .setClassToggle("#reveal2", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1// move trigger to center of element
  })
  .setClassToggle("#reveal3", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


  return (
    <div style={{}}>
        <div id="trigger0" className="spacer s0"></div>
        <div id='reveal0'>
        <h2 className='titulo'>Ciudadanos del mundo</h2>
        <hr className='line'/>
        </div>

        <div id="trigger1" className="spacer s0"></div>
        <div id='reveal1' className="grid-container">
          <div  className="item1">
            <img src={sec1img}  style={{width:"600px",height:"600px",marginLeft:"80px",marginRight:"30px"}} alt="imagen"/>
          </div>
          <div  className="item2">
            
              <p className='htext1'>
              En este breve relato queremos contarles una hermosa historia y el porqué seguimos adelante con ella, poniéndole mucha pasión, como expresión superlativa del amor fraternal.
              </p>
              
              <p className='htext2'>
              Había una vez en un lugar remoto del mundo a pasos de la Antártica, en la ciudad de Punta Arenas; cabecera de la Región de Magallanes, ciudad de inmigrantes yugoslavos y de pueblos originarios, conocida mundialmente por su privilegiada belleza geográfica lo cual hace que sea visitada por muchas personas del mundo y diversas culturas.
              </p>
              
              <p className='htext3'> 
              En el inmenso Estrecho de Magallanes siempre se divisan cruceros de diversas nacionalidades. 
              En este lugar teníamos un pequeño local dedicado a diferentes actividades desde antes de junio del 2019.
              </p>
          </div>
        </div >

        <div id="trigger2" className="spacer s0"></div>
        <div id="reveal2" className='grid2'>
          <div className='item27'>
              <p className='htext4'>
              
              Conocimos a David, un joven venezolano de Valencia, quién se inició como colaborador y terminó siendo un gran amigo.
              Buscábamos cómo hacerlo feliz en su destierro y le trajimos algunos productos de su origen.
              Nunca imaginamos tanta felicidad y no olvidamos el brillo en sus ojos por lo que consideramos una brillante idea continuar trayendo alegrías a él y su comunidad.
              Y es así como comenzó esta dulce historia.

              Y es así también que se fue forjando una pequeña actividad mercantil impensada por nosotros y se convirtió en un punto de encuentro, de aromas , sabores , historias , angustias, alegrías , vivencias etc…donde primó la amistad e integración .

              </p>
          </div>

          <div className='item28'>
          <img src={sec2img}  style={{width:"600px",height:"600px",marginLeft:"0px",marginRight:"30px"}} alt="imagen"/>
          </div>

        </div>

        <div id="trigger3" className="spacer s0"></div>
        <div id='reveal3' className='grid3'>
          <div className='item29'>
          <img src={sec3img}  style={{width:"600px",height:"600px",marginLeft:"50px",marginRight:"30px"}} alt="imagen"/>
          </div>
          <div className='item30'>
            <p className='htext5'>

            El buen hacer entre las personas hace que la relación sea cada vez más íntima y la confianza que despierta la intimidad hace que se vuelva un sentimiento solidario.

            Descubrimos un abanico desconocido respecto a sus costumbres que nos parecieron sumamente interesantes, sobre todo la gastronomía venezolana.

            En este intercambio cultural descubrimos la importancia de sus exquisiteces culinarias de las cuales “el queso venezolano” constituye la base primordial.
            Al pasar el tiempo nos fuimos embebiendo y descubriendo su importancia y su gran variedad.

            Fuimos conociendo en este andar , muchas historias y motivos de los cuales los llevó a alejarse de su patria.

            Conocimos a través de historias de vida el bello país que es Venezuela, que seguramente retomará la senda histórica que todo el mundo ha conocido. 

            Como consecuencia de una desgracia mundial que fue la Pandemia, nos vimos obligados a cerrar el local que tanta alegría nos daba.
            </p>

          </div>
        </div>


    
        
    </div>
  )
}
