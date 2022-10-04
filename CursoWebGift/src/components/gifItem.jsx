import React from 'react'
import '../styles/itemCard_styles.css';

export const GifItem = ({titulo, url}) => {
    return (
        <div className='itemCard'>            
            <img src={url} alt={titulo} className='itemImg'/>
        </div>
    )
}
