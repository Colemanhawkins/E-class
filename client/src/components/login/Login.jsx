import React from 'react';
import AuthUrl from '../../services/AuthUrl.js';
import { useDispatch } from 'react-redux';
import { createCode , clearLocal } from '../../redux/actions/actions.js';
import logo from "../../images/logo.png";
import './login.css';

const Login = () => {
    //uso dispatch para dispachar el codigo y tenerlo de manera persistente en el local con redux
    const dispatch = useDispatch();
    //limpio todo lo que tenga en caso de tener una session anterior
    dispatch(clearLocal())
    //una vez obtenido el codigo redirecciono a mi siguiente componente
    const code =  new URLSearchParams(window.location.search).get('code');
    //handle para obtener el valor de  la ruta y obtener el codigo
    const handleCode  = () => {
        window.location.href = AuthUrl
    }
    //ni bien se genera el codigo en el url lo guardo y redirecciono
    if(code){
            dispatch(createCode(code))
            window.location.href = './home'
    }
 
return (
    	<React.Fragment>
			<header className="header">
                    <div className="content">
                        <img src={logo} alt="none" className="img" />
					    <h1>Spotify</h1>
                    </div>
                    <div>
					    <button onClick={() => handleCode()} target="_blank" className="btn">
						    Login
					    </button>
                    </div>
			</header>
		</React.Fragment>
        )
}

export default Login;
