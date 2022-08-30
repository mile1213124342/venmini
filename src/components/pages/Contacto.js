import React from 'react'
import FooterComponent from '../FooterComponent';
import FormularioComponent from '../FormularioComponent';
import MapComponent from '../MapComponent';
import NavBarComponentContacto from '../NavBarComponentContacto';

export default function () {
  return (
    <div>

        <NavBarComponentContacto/>
        <MapComponent/>
        <FormularioComponent/>
        <FooterComponent/>
        
    </div>
  )
}
