import albumNotFound from '../../images/albumNotFound.jpg';
import { currentTrack  ,addTrackToHistory } from '../../redux/actions/actions';
import { useDispatch , useSelector } from 'react-redux';
import React from 'react';
import './trackCard.css';

const TrackCard = ( {track }) => {
    //verifico el historial
    const history = useSelector((state) => state.history.history)
    //me guardo las uris
    const uris = history.map( (historyTrack) => 
        historyTrack.uri
    )
    //dispatch
    const dispatch = useDispatch()
    //dipatch la cancion para que se reproduzca  en el player
    const handlePlay = () => {
      dispatch(currentTrack(track))
      //pregunto si ya esta en el historial para no guardar repetidos
      if( !uris.includes(track.uri)){
      dispatch(addTrackToHistory(track))
      }
    }    

    return (
            <div onClick={handlePlay} className="case_container">
                    <div className="track_data">
                        <img
                        className="track_img"
                        src={track.imageAlbum ? track.imageAlbum : albumNotFound}
                        alt="ups, somethin was wrong"
                        />
                    </div>
                <div className="track_data">
                    <div>
                        <p
                        className="track_title">
                            {track.title}
                        </p>
                        <p
                        className="track_artist">
                        Cancion - {track.artist}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default TrackCard;
