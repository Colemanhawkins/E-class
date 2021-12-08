import React from 'react'
import { useSelector } from "react-redux";
import UseAuth from '../../services/UseAuth.js';
import Loader from '../loader/Loader.jsx';
import Navbar from '../navbar/Navbar.jsx';
import './home.css'
const Home = () => {
    //verifico si existe el token local 
    const accessTokenlocal = useSelector((state) => state.history.token) ;
    //obtengo el codigo que lo tengo dentro de mi localstorage por redux 
    const code = useSelector((state) => state.history.code);
    //aqui lo mando a crear en mi utils que solicita luego a mi api;
    const accessToken = accessTokenlocal.access_token ? accessTokenlocal.access_token : UseAuth(code);
    console.log(accessToken);
    //pregunto si hay resultados para luego hacer banderas y renderizar las cards
    const results = useSelector((state) => state.info)
    
    return (
        <React.Fragment>
			<header>
				<Navbar />
			</header>
            <section>       
            { results.loading === true  ?
            <div className='main'> 
                <Loader /> 
            </div> 
            : 
            null
            }
            </section>
			{/* <section class="card">
				<Card />
			</section> */}
		</React.Fragment>
    )
}

export default Home
