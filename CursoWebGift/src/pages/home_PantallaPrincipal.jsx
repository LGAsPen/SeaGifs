import {React, useState} from 'react'
import {AgregarCategoria, GifTargeta} from '../routes/routes.js';

export const HomeGif = () => {
  const [Categorias, setCategorias] = useState(['Pokemon']);

  const agregarCategoria = (nuevoValor)=>{
    console.log(nuevoValor);
    if (Categorias.includes(nuevoValor)) return;         
   setCategorias([nuevoValor, ...Categorias]);             
  }

  return (
    <>
    <h2 className='TituloPrincipal'>SeaGifs</h2>
    <AgregarCategoria 
    onNuevaCategoria={(value)=>agregarCategoria(value)}
    />
    
      {Categorias.map(categoria=> (
        <GifTargeta 
        key={categoria} 
        categoria={categoria}           
        />)
      )}             
    </>
  )
}
