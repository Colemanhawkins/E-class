import * as types from './actionTypes.js';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

export const clearLocal = () => ({
   type: types.CLEAR_LOCAL
})

export const createCode = (code) => ({
   type: types.CREATE_CODE,
   payload: code
 })

export const createToken = (res) => async (dispatch) => {
   try {

     dispatch({
      type : types.CREATE_TOKEN,
      payload: res
      });
      
      const refreshToken =  res.refresh_token;
      const expiresIn = res.expires_in;
      //genero una iife que se auto invoque ni bien se acabe el tiempo valido del token
      (function interval (){setInterval( async () => {
         await axios.post('http://localhost:3001/login/refreshToken', {
             refreshToken,
         }).then(res => {
            //doi formato a lo que necesito
            const data ={
               AccessToken: res.data.accessToken,
               expiresIn: res.data.expiresIn
            }
             //solo necesito reanudar el tiempo de expiracion 
             // y la nueva clave de accesso
             dispatch({
                type: types.REFRESH_TOKEN,
                payload: data
             })
   
         }).catch((err)=> {
            console.log(err)
             //en caso de error me vuelvo al login
             window.location = '/';
         })
      }, (expiresIn - 60) * 1000)
      })();
   }
   catch(err){
         console.log(err)
   }
 }

export const searchResults = (search , accessToken) =>  (dispatch) => {
      //distpacho una action para que se genere un loader
      dispatch({
         type: types.ADD_RESULTS_GET
      })
     //instanceo la api
     const spotifyApi = new SpotifyWebApi({
      clientId: process.env.REACT_APP_CLIENT_ID
      });
      //seteo el acceso al token para poder acceder 
      //a las peticiones de la api
      spotifyApi.setAccessToken(accessToken);
      //busco las canciones
      spotifyApi.searchTracks(search ,{ limit: 5, offset: 0 }).then((res) => {
         //doi formato a los tracks
         const tracks = (res.body.tracks.items.map((track) => {
            const mediumAlbumImage =  track.album.images.length !==0 ?track.album.images[1].url : null;
               return {
                     artist: track.artists[0].name,
                     title: track.name,
                     uri: track.uri,
                     imageAlbum: mediumAlbumImage
               }
            }))
         //busco los albumnes   
         spotifyApi.searchAlbums(search , { limit: 3 , offset: 0}).then((res) => {
            //doi formato a los albums
            //formateo los artistas dentro del album
            const albums = (res.body.albums.items.map((album) => {
               const mediumAlbumImage = album.images.length !== 0 ? album.images[1].url : null
               const artists = album.artists.map((artist) => {
                  return artist.name
               })
                  return {
                        artist: artists,
                        title: album.name,
                        albumUrl: mediumAlbumImage,
                        id : album.id
                  }
               }))
            //busco los artistas
            spotifyApi.searchArtists(search , {limit: 2 , offset: 0}).then((res) => {
               //doi formato a los artistas
               const artists = (res.body.artists.items.map((artist) => {
                  const mediumArtistImage = artist.images.length !== 0 ? artist.images[1].url : null
                  return{
                        name: artist.name,
                        image: mediumArtistImage,
                        id: artist.id
                  }
               }))
            //doi el ultimo formato al resultado de la busqueda
            const results = {
               tracks : tracks,
               albums : albums,
               artists : artists
            }
            //dispacho el objeto *carita feliz*
            dispatch({
               type: types.ADD_RESULTS_SUCCESS,
               payload: results
            })
            })
         })
      })
      .catch((err) => {
         console.log(err);
      })
}

export const currentTrack = (track) => ({
      type: types.CURRENT_TRACK,
      payload: track
   })


export const addTrackToHistory = (track) => ({
   type : types.ADD_HISTORY_TRACK,
   payload:  track
})