
export const getImagen = async() => {

try {
    const apiKey = 'VVUmPhVsPWIQ0sYYFZ6iaqFfsEIMkYSj';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();

    const { url } = data.images.original;    
    
    return url;
    
    } catch (error) {
        //maejo de errores
        console.error(error);
        return 'No se encontro la imagen';
    }
}
getImagen();