import React from 'react'
import FooterComponent from '../FooterComponent'
import NavBarComponent from '../NavBarComponent'
import NuestraHistoriaComponent from '../NuestraHistoriaComponent'
import { useEffect, useState } from 'react'
import PuffLoader from "react-spinners/PuffLoader";


export default function Nosotros() {
  const [loading,setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },4000);

  },[])
 
  return (
    <>
    {loading ? (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",backgroundColor:"black"}}>
            <PuffLoader size={50} color={'#6d0000'} loading={loading}/>
          </div>

    ):(
    
    <div >
        <NavBarComponent/>
        <NuestraHistoriaComponent/>
       <FooterComponent/>
    </div>
    )}
    </>

  )
}
