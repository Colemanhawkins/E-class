import React from 'react'
import artistNotFound from '../../images/artistNotFound.png';
import './artistCard.css';

const ArtistCard = (artist) => {

    return (
        <div className="case_container">
            <div className="Artist_data">
                <img
                className="Artist_img"
                src={artist.artist.image ? artist.artist.image : artistNotFound}
                alt="ups, somethin was wrong"
                />
            </div>
            <div className="Artist_data">
                <div>
                    <p
                    className="Artist_title">
                        {artist.artist.name}
                    </p>
                    <p
                    className="Artist_artist">
                    Artist
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArtistCard;
