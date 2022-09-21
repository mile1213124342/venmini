import React , {useState} from 'react'
import FooterComponent from '../FooterComponent';
import FormularioComponent from '../FormularioComponent';
import MapComponent from '../MapComponent';
import NavBarComponentContacto from '../NavBarComponentContacto';

import { useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";

export default function () {
  const [loading,setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },7000);

  },[])


  return (

    <>
    {loading ? (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",backgroundColor:"black"}}>
            <PuffLoader size={50} color={'#6d0000'} loading={loading}/>
          </div>

    ):(
        <div>
            <NavBarComponentContacto/>
            <MapComponent/>
            <FormularioComponent/>
            <FooterComponent/>
        </div>
    )}
    
    </>

  )
}
