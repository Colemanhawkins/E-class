import * as types from './actionTypes.js';
import axios from 'axios';

export const createCode = (code) => ({
   type: types.CREATE_CODE,
   payload: code
 })

 export const clearLocal = () => ({
    type: types.CLEAR_LOCAL
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
             //en casode error me vuelvo al login
             window.location = '/';
         })
      }, (expiresIn - 60) * 1000)
      })();
   }
   catch(err){
         console.log(err)
   }
 }




 
// export const loadTracks = (search) =>  async (dispatch) => {
//   await spotifyApi.searchTracks(search ,{ limit: 5, offset: 0 }).then((res) => {
//       //si no llego a terminar la busqueda y setearse el switch
//       // corto la ejecuccion en este punto
//       if(cancel) return;
//       const tracks = (res.body.tracks.items.map((track) => {
//           const smallestAlbumImage = track.album.images.reduce(
//               (smallest, image) => {
//                   if( image.height < smallest.height) return image;
//                   return smallest;
//               }, track.album.images[0]);
//               return {
//                   artist: track.artists[0].name,
//                   title: track.name,
//                   uri: track.uri,
//                   albumUrl: smallestAlbumImage.url
//               }
//       }))
//   })
//   .catch((err) => {
//       console.log(err);
//   })
// }

// export const AddHistoryId = (id) => ({
//    type : types.ADD_HISTORY_ID,
//    payload:  id
// })