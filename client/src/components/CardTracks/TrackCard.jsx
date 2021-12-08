import React from 'react';
import './trackcard.css';
import imageNotFound from '../../images/imageNotFound';


const TrackCard = ( { track , chooseTrack }) => {

    // const handlePlay = () => {
    //     chooseTrack(track)
    // }    

    const stringArtists = track.artist.join(', ')


    return (

    <div className="case_container">
            <div className="track_data">
                <img
                className="track_img"
                src={track.imageAlbum ? track.imageAlbum : imageNotFound}
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
                 className="track_description">
                Cancion - {stringArtists}
                </p>
            </div>
        </div>
    </div>


        // <div 
        // className="d-flex m-2 align-items-center"
        // style={{cursor: 'pointer'}}
        // onClick={handlePlay}
        // >
        //     <img src={track.albumUrl} style={{height: '64px' , width: '64px'}} alt="nothing" />
        //     <div className='ml-3'>
        //         <div>{track.title}</div>
        //         <div className='text-muted'>{track.artist}</div>
        //     </div>
        // </div>
    )
}

export default TrackCard;
