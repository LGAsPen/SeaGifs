

export const getGifs= async (categoria)=>{
    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=ZxmOJjRbIaiSo4a9BrIgAyPXxye034fA&q=${categoria}&limit=10`;
    const peticion = await fetch(url);        
    const { data=[] }= await peticion.json();
    const gifs = data.map(img =>({
        id: img.id,
        titulo: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}