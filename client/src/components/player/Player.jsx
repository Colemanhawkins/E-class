import React , {useState , useEffect } from 'react';
import { useSelector } from "react-redux";
import SpotifyPlayer from 'react-spotify-web-playback'

const Player = ({ trackUri }) => {
    //seteo un estado para el estado del play
    const [play , setPlay ] = useState(false);
    //accedo a la token desde mi estalo local
    const accessToken = useSelector((state) => state.history.token.access_token);
    //accedo a la cancion que se esta reproducciendo actualmente
    const currentSong = useSelector((state) => state.info.currentSong.uri)

    useEffect(() => {
            setPlay(true)
    }, [currentSong])

    return (
        !accessToken ?  null : (
            <SpotifyPlayer
            token={accessToken}
            uris={currentSong}
            callback={state =>{
             if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            styles={{
                activeColor: '000000',
                bgColor: '#D6FFD6',
                color: '000000',
                loaderColor: '000000',
                sliderColor: '#000',
                trackArtistColor: '#00',
                trackNameColor: '#000',
              }}
            />
    ))
}

export default Player
