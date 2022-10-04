import {useState, useEffect} from 'react'
import { getGifs } from './../apis/get_gifs'


export const useFetchGifs = (categoria) => {
    const [imagenes, setimagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    

    const getImagenes = async () => {
        const nuevaImagen = await getGifs(categoria);
        setimagenes(nuevaImagen);
        setIsLoading(false);
    }

    useEffect (()=>{
        getImagenes();
    },[]);

    return{
        imagenes: imagenes,
        isLoading: isLoading
    }
}
