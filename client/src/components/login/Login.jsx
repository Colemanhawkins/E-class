import React, { useEffect } from 'react';
import AuthUrl from '../../utils/AuthUrl.js';
import { Container } from 'react-bootstrap';

const Login = () => {
    //una vez obtenido el codigo redirecciono a mi siguiente componente
    const code = new URLSearchParams(window.location.search).get('code');
        
    useEffect(() => {
        //si la url fue modificada y el codigo ya ha sido almacenado en una variable la almaceno en localstorage
        //no es material sencible y la api ya de por si la brinda por una url 
        if(code) {
            localStorage.setItem('Code', code);
            window.location.href = '/dashboard';
        }

    }, [code])
    

    return (
        <Container
        className='d-flex justify-content-center align-items-center bg-image '
        style={{ minHeight: '100vh', minWidth: '100vh' ,backgroundImage: `url('https://www.wallpaperuse.com/wallp/86-867181_m.jpg')` }}
        >
            <a className='btn btn-success btn-lg' href={AuthUrl}>
              Login Spotify
            </a>
        </Container>
    )
}

export default Login;
