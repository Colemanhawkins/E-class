import axios from'axios';
import { useState , useEffect } from 'react'

const useAuth = (code) => {
    //seteo las variables que me interesan del objeto con el que hago las 
    //peticiones a la api


    const [accessToken, setAccessToken] = useState();
    const [refreshToken , setRefreshToken] = useState();
    const [expiresIn , setExpiresIn] = useState();

    useEffect(() =>{
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            //seteo las variables que me llegan de la api de spotify
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            console.log(res.data)
        }).catch(()=> {
            //en caso de error me vuelvo al login
            window.location = '/';
        })
    }, [code])

    useEffect(() =>{
        //en el caso que no existe todabvia una respuesta de la api 
        // corto la ejecuccion
        if(!refreshToken || !expiresIn ) return;
        //seteo un intervalo de tiempo para que un minuto antes de terminada
        //la session reanude con un refresh del token
        const interval = setInterval(() => {
        axios.post('http://localhost:3001/login/refreshToken', {
            refreshToken,
        }).then(res => {
            //solo necesito reanudar el tiempo de expiracion 
            // y la nueva clave de accesso
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
        }).catch(()=> {
            //en casode error me vuelvo al login
            window.location = '/';
        })
    }, (expiresIn - 60) * 1000)
    return () => clearInterval(interval)
    }, [refreshToken , expiresIn])
    //retorno solo el token 
    return accessToken;
}

export default useAuth;
