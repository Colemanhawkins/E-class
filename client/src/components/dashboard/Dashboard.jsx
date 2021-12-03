import { useState , useEffect } from 'react';
import UseAuth from '../../services/UseAuth.js';
import {Container , Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from '../trackItem/TrackSearchResult';
import Player from '../player/Player.jsx';

const Dashboard = () => {
    //instanceo la api
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.REACT_APP_CLIENT_ID
    });
    //aqui obtengo el codigo de mi primera token para luego solicitar
    //el token de permiso
    const code = localStorage.getItem('Code');
    //aqui lo mando a crear en mi utils que solicita luego a mi api
    const accessToken = UseAuth(code);
    //parametros de busqueda del input
    const [search , setSearch] = useState("");
    //resultados
    const [searchResult , setSearchResult] = useState([]);
    //seteo para pasar uri de la cancion actual que se va a reproducir
    const [playingTrack , setPlayingTrack] = useState();
    //seteo funcion para que pase por parametros la cancion actual
    const chooseTrack = (track) => {
        setPlayingTrack(track);
    }
    //usamos un useEffect para cuando se seteen cambios en search se ejecute
    //la busqueda
    useEffect(() => {
        //si no tengo absolutamente nada en la busqueda lo seteo
        //como un array vacio
        if(!search) return setSearchResult([]);
        //si ni siquiera tengo la token de acceso corto la ejecuccion
        if(!accessToken) return;
        //seteamos un switch para que cuando se busque en el input 
        // espere a terminar para culminar con la busqueda
        let cancel = false;
        //todo esto deberia estar dentro de un action en donde se buscan canciones

        //seteo el acceso al token para poder acceder 
        //a las peticiones de la api
        spotifyApi.setAccessToken(accessToken);
        //busco solo las canciones;
        spotifyApi.searchTracks(search).then((res) => {
            //si no llego a terminar la busqueda y setearse el switch
            // corto la ejecuccion en este punto
            if(cancel) return;

            setSearchResult(res.body.tracks.items.map((track) => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if( image.height < smallest.height) return image;
                        return smallest;
                    }, track.album.images[0]);
                
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
            }))
        })
        .catch((err) => {
            console.log(err);
        })
        //switcheo el cancel para que  pueda haber una nueva busqueda 
        return () => (cancel = true)
    }, [search,accessToken]);

    return (
        <Container className="d-flex flex-column py-2" style={{
            height: "100vh"
        }}>
            <Form.Control
            type="search"
            placeholder="Search Songs/Artists"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
        <div className="flex-grow-1 my-2" style={{
            overFlowY: "auto"
        }}> 
        Songs
        {searchResult.map((track) => (
         <TrackSearchResult 
         track={track} 
         key={track.uri}
         chooseTrack={chooseTrack}
         />  
        ))}
        </div>
        <div><Player  
        accessToken={accessToken} 
        trackUri={playingTrack?.uri}
        /></div>
        </Container>
    )
}

export default Dashboard
