import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './gifItem';
import './../styles/itemCard_styles.css';

export const GifTargeta = ({categoria}) => {

const {imagenes, isLoading} = useFetchGifs(categoria);
console.log({imagenes, isLoading});

  return (
    <>
    {
      (isLoading) && <h1>Cargando....</h1>
      
    }
      <div>
        <h3 className='nombreCategoria'>{categoria}</h3>
      </div>
      
      <div className='gridCard'>
        {imagenes.map((image)=>
        <GifItem
        key={image.id}
        {... image}                     
        />          
        )}  
      </div>                 
    </>
  )
}
