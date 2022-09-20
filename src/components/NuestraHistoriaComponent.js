import React from 'react'
import './nuestrahistoria.css'
import sec1img from "./historia/historia3.png"
import sec2img from "./historia/historia1.png"
import sec3img from "./historia/historia2.png"
import sec4img from "./historia/historia4.jpg"
import sec5img from "./historia/historia5.png"
import ScrollMagic from "scrollmagic";

import { Controller , Scene } from 'react-scrollmagic'
import {Tween, Timeline } from 'react-gsap'

export default function NuestraHistoriaComponent() {


  return (
    <div style={{}}>
          <div >
                        <h2 className='titulo'>Ciudadanos del mundo</h2>
                        <hr className='line'/>
                        
          </div>

          <Controller>
          <Scene
            duration={10}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            offset={0}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<div className='timeline'>

                                    <div className="grid-container">
                                      <div  className="item1">
                                        <img src={sec1img}  style={{width:"500px",height:"600px",marginLeft:"80px",marginRight:"30px"}} alt="imagen"/>
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

                    </div>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  
                </Timeline>
              </div>
            )}
          </Scene>
          </Controller>
    

          <Controller>
          <Scene
            duration={10}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            offset={0}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<div className='timeline'>

                    
                            <div  className='grid2'>
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
                              <img src={sec2img}  style={{width:"500px",height:"600px",marginLeft:"0px",marginRight:"130px"}} alt="imagen"/>
                              </div>

                            </div>

                    </div>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  
                </Timeline>
              </div>
            )}
          </Scene>
          </Controller>

          <Controller>
          <Scene
            duration={10}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            offset={0}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<div className='timeline'>
                                    <div  className='grid3'>
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

                    </div>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  
                </Timeline>
              </div>
            )}
          </Scene>
          </Controller>

          <Controller>
          <Scene
            duration={10}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            offset={0}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<div className='timeline'>
                                    <div  className='grid3'>
                                      <div className='item29'>
                                      <img src={sec4img}  style={{width:"600px",height:"600px",marginLeft:"50px",marginRight:"30px"}} alt="imagen"/>
                                      </div>
                                      <div className='item30'>
                                        <p className='htext5'>
                                        Teníamos una integración tan profunda que seguimos siempre en contacto a pesar de la adversidad que significó la pandemia y redoblamos esfuerzos para no perdernos, haciendo eventos en vivo vía zoom alegrándonos todos .
                                        Seguimos trabajando y creciendo cada día. 
                                        Nuestros colaboradores son de Venezuela y les estamos profundamente agradecidos por su apoyo incondicional.
                                        Todas las personas de bien tienen  más argumentos para estar unidas que des unidas.
                                        El interactuar hace que uno se vaya conociendo el uno con el
                                        otro sin límite de idioma , religión , costumbres, etc..
                                        </p>
                                      </div>
                                    </div>
                    </div>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  
                </Timeline>
              </div>
            )}
          </Scene>
          </Controller>

          <Controller>
          <Scene
            duration={10}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            offset={0}
          >
            {(progress) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<div className='timeline'>
                                    <div  className='grid3'>
                                      <div className='item29'>
                                      <img src={sec5img}  style={{width:"600px",height:"600px",marginLeft:"50px",marginRight:"30px"}} alt="imagen"/>
                                      </div>
                                      <div className='item30'>
                                        <p className='htext5'>
                                        En junio de este año 2022 nos hemos re localizado, con todo nuestro esfuerzo y amor fraternal, haciendo de un pequeño lugar, un gran ámbito de encuentro.
                                        Siéntanse en casa, transportándose a su tierra con sabores y llevando alegrías a sus vidas. 
                                        Y así en esta breve historia, contamos cómo las culturas no tienen límites y cómo el amor supera todo.
                                          “Quien hace del mundo su hogar, nunca estará lejos de casa”

                                        Somos Ana y César. Nos sentimos gratamente unidos a ustedes.
                                        “Estamos a la orden”
                                        </p>
                                      </div>
                                    </div>
                    </div>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  
                </Timeline>
              </div>
            )}
          </Scene>
          </Controller>
    
        
    </div>
  )
}
