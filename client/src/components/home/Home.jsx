import React from 'react'
import SpotifyWebApi from 'spotify-web-api-node';
import { useSelector } from "react-redux";
import UseAuth from '../../services/UseAuth.js';
import Navbar from '../navbar/Navbar.jsx';

const Home = () => {
   //instanceo la api
   const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID
    });
    //verifico si existe el token local 
    const accessTokenlocal = useSelector((state) => state.history.token) ;
    //obtengo el codigo que lo tengo dentro de mi localstorage por redux 
    const code = useSelector((state) => state.history.code);
    //aqui lo mando a crear en mi utils que solicita luego a mi api;
    const accessToken = accessTokenlocal.access_token ? accessTokenlocal.access_token : UseAuth(code);

    return (
        <React.Fragment>
			<header>
				<Navbar />
			</header>
			{/* <section class="card">
				<Card />
			</section> */}
		</React.Fragment>
    )
}

export default Home
