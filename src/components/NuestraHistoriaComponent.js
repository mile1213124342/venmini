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

          <div className='cont'>
                <div data-aos="fade-right" className='con1I'>
                <img src={sec1img}   className="img-hist" alt="imagen"/>    
                </div>
                <div data-aos="fade-left" className='con1D'>
                    <p className='htext1'>
                        En este breve relato queremos contarles una hermosa historia y el porqué seguimos adelante con ella, poniéndole mucha pasión, como expresión superlativa del amor fraternal.
                    </p>  
                    <p className='htext2'>
                     Había una vez en un lugar remoto del mundo a pasos de la Antártica, en la ciudad de Punta Arenas; cabecera de la <strong>Región de Magallanes</strong>, ciudad de inmigrantes yugoslavos y de pueblos originarios, conocida mundialmente por su privilegiada belleza geográfica lo cual hace que sea visitada por muchas personas del mundo y diversas culturas.
                    </p> 
                    <p className='htext3'> 
                    En el inmenso <strong>Estrecho de Magallanes</strong> siempre se divisan cruceros de diversas nacionalidades. 
                    En este lugar teníamos un pequeño local dedicado a diferentes actividades desde antes de junio del 2019.
                    </p>
                </div>  
          </div>

          <div className='cont'>
                <div data-aos="fade-right" className='con1I'>
                <p className='htext4'> 
                    Conocimos a David, un joven venezolano de Valencia, quién se inició como colaborador y terminó siendo un gran amigo.
                    Buscábamos cómo hacerlo feliz en su destierro y le trajimos algunos productos de su origen.
                    Nunca imaginamos tanta felicidad y no olvidamos el brillo en sus ojos por lo que consideramos una brillante idea continuar trayendo alegrías a él y su comunidad.
                    Y es así como comenzó esta dulce historia.
                    Y es así también que se fue forjando una pequeña actividad mercantil impensada por nosotros y se convirtió en un punto de encuentro, de aromas , sabores , historias , angustias, alegrías , vivencias etc…donde primó la amistad e integración .
                </p>  
                </div>
                <div data-aos="fade-left" className='con1D'>
                <img src={sec2img}  className="img-hist"  alt="imagen"/>
                </div>  
          </div>

          <div className='cont'>
                <div data-aos="fade-right" className='con1I'>
                <img src={sec3img}  className="img-hist"  alt="imagen"/>
                </div>
                <div data-aos="fade-left" className='con1D'>
                    <p className='htext5'>
                    El buen hacer entre las personas hace que la relación sea cada vez más íntima y la confianza que despierta la intimidad hace que se vuelva un sentimiento solidario.
                    Descubrimos un abanico desconocido respecto a sus costumbres que nos parecieron sumamente interesantes, sobre todo la gastronomía venezolana.
                    En este intercambio cultural descubrimos la importancia de sus exquisiteces culinarias de las cuales “el queso venezolano” constituye la base primordial.
                    Al pasar el tiempo nos fuimos embebiendo y descubriendo su importancia y su gran variedad.
                    
                    </p>
                </div>  
          </div>

          <div className='cont'>
                <div data-aos="fade-right" className='con1I'>
                <p className='htext5'>
                    Fuimos conociendo en este andar , muchas historias y motivos de los cuales los llevó a alejarse de su patria.
                    Conocimos a través de historias de vida el bello país que es Venezuela, que seguramente retomará la senda histórica que todo el mundo ha conocido. 
                    Como consecuencia de una desgracia mundial que fue la Pandemia, nos vimos obligados a cerrar el local que tanta alegría nos daba.
                                        Teníamos una integración tan profunda que seguimos siempre en contacto a pesar de la adversidad que significó la pandemia y redoblamos esfuerzos para no perdernos, haciendo eventos en vivo vía zoom alegrándonos todos .
                                        Seguimos trabajando y creciendo cada día. 
                                        Nuestros colaboradores son de Venezuela y les estamos profundamente agradecidos por su apoyo incondicional.
                                        
                </p>
                                      
                </div>
                <div data-aos="fade-left" className='con1D'>
                <img src={sec4img}  className="img-hist"  alt="imagen"/>
                </div>  
          </div>
          <div className='cont'>
                <div data-aos="fade-right" className='con1I'>
                <img src={sec5img}  className="img-hist"  alt="imagen"/>                 
                </div>
                <div data-aos="fade-left" className='con1D'>
                <p className='htext5'>  
                Todas las personas de bien tienen  más argumentos para estar unidas que des unidas.
                                        El interactuar hace que uno se vaya conociendo el uno con el
                                        otro sin límite de idioma , religión , costumbres, etc..
                                        En junio de este año 2022 nos hemos re localizado, con todo nuestro esfuerzo y amor fraternal, haciendo de un pequeño lugar, un gran ámbito de encuentro.
                                        Siéntanse en casa, transportándose a su tierra con sabores y llevando alegrías a sus vidas. 
                                        Y así en esta breve historia, contamos cómo las culturas no tienen límites y cómo el amor supera todo.
                                          “Quien hace del mundo su hogar, nunca estará lejos de casa”

                                
                </p>
                <p className='htext5'>  
                                        Somos Ana y César. Nos sentimos gratamente unidos a ustedes.
                                        “Estamos a la orden”
                </p>
                
                </div>  
          </div>

          <hr className='line2'/>   
    </div>
  )
}
