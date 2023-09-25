

const Context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.156,
            lng: -12.163
        }
    }
}