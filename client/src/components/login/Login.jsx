import React from 'react'
import { Container } from 'react-bootstrap';
import AuthUrl from '../../utils/AuthUrl.js';
import {useDispatch , useSelector} from 'react-redux';
import  {createCode} from '../../redux/actions/actions.js'

const Login = () => {
    const state = useSelector((state) => ({...state.code}));
    console.log(state.loading);
    //a
    //uso dispatch
    const dispatch = useDispatch();
    //una vez obtenido el codigo redirecciono a mi siguiente componente
    const code = new URLSearchParams(window.location.search).get('code');
    if(code && state.loading === true) {
        dispatch(createCode(code))
        // window.location.href = '/dashboard';
    }

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

export default Login
