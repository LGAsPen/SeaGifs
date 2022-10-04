import {React, useState} from 'react';
import './../styles/inputBuscar_styles.css';


export const AgregarCategoria = ({onNuevaCategoria}) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target})=>{
        setinputValue(target.value);
    }

    const onInputSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length<=0)return;        
        onNuevaCategoria( inputValue.trim() );
        setinputValue('');
    }

  return (    
    <form className='formBuscar' onSubmit={(event)=>onInputSubmit(event)}>
        <input 
        className='InputBuscar' 
        type='text' 
        placeholder='Buscar' 
        value={inputValue}
        onChange={onInputChange}            
        />     
    
    </form>

  )
}
