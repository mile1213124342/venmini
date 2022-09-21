import React from 'react'
import NavBarComponentProductos from '../NavBarComponentProductos'
import FooterComponent from '../FooterComponent'
import ProductosLinkComponent from '../ProductosLinkComponent'
import { useEffect, useState } from 'react'
import PuffLoader from "react-spinners/PuffLoader";

export default function Productos() {
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
              <NavBarComponentProductos/>
              <ProductosLinkComponent/>
              <FooterComponent/>
          </div>
          )}
    </>
  )
}
