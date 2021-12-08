import React from 'react'
import './albumCard.css';
import albumNotFound from '../../images/albumNotFound.jpg';

const AlbumCard = ({album}) => {

    const Artists = album.artist.join(', ')

    return (
        <div className="case_container">
            <div className="track_data">
                <img
                className="track_img"
                src={album.albumUrl ? album.albumUrl : albumNotFound}
                alt="ups, somethin was wrong"
                />
            </div>
            <div className="track_data">
                <div>
                    <p
                    className="track_title">
                        {album.title}
                    </p>
                    <p
                    className="track_artist">
                    Album - {Artists}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AlbumCard
