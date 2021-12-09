import React from 'react'
import { useSelector } from "react-redux";
import UseAuth from '../../services/UseAuth.js';
import Loader from '../loader/Loader.jsx';
import Navbar from '../navbar/Navbar.jsx';
import TrackCard from '../CardTracks/TrackCard.jsx';
import AlbumCard from '../cardAlbum/AlbumCard.jsx';
import ArtistCard from '../artistCard/ArtistCard.jsx';
import Player from '../player/Player.jsx';
import './home.css';

const Home = () => {
    //verifico si existe el token local 
    const accessTokenlocal = useSelector((state) => state.history.token) ;
    //obtengo el codigo que lo tengo dentro de mi localstorage por redux 
    const code = useSelector((state) => state.history.code);
    //pregunto si hay resultados para luego hacer banderas y renderizar las cards
    const results = useSelector((state) => state.info)
    //aqui lo mando a crear en mi utils que solicita luego a mi api;
    const accessToken = !accessTokenlocal.access_token ?  UseAuth(code) : accessTokenlocal.access_token;

    return (
        <React.Fragment>
			<header>
				<Navbar />
			</header>
            <section className='section-main'>       
            { results.loading === true  ?
            <div className='main'> 
                <Loader /> 
            </div> 
            : 
            null
            }
            {   !results.artistsInfo ? null :
                results.artistsInfo.map((artist) => (
                 <ArtistCard artist={artist} key={artist.id} />   
                ))
            }
            { !results.tracks ? null :
            results.tracks.map((track) => (
                <TrackCard track={track} key={track.uri} />
            ))
            }
            { !results.albumsInfo ? null : 
            results.albumsInfo.map((album) => (
                <AlbumCard album={album} key={album.id}/> 
            ))
            }
            </section>
            <section className='footer'>
                { !results ? null : ( 
                <footer>
                <Player  
                    />
                </footer>
                )}
            </section>
		</React.Fragment>
    )
}

export default Home
