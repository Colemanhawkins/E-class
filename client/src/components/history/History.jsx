import React from 'react'
import Navbar from '../navbar/Navbar.jsx';
import Player from '../player/Player.jsx';
import { useSelector } from "react-redux";
import './history.css';
import TrackCard from '../cardTracks/TrackCard.jsx';

const History = () => {

    const history = useSelector((state) => state.history.history)

    const historyTracks = history.length > 10 ? history.slice(history.length - 10, history.length) : history

    return (
        <React.Fragment>
        <header>
            <Navbar />
        </header>
        <section className='section-main'>       
        { historyTracks.length === 0 ? (
        <div 
        className='data'>
            No Posees Historial...
            </div>
        ) :
        historyTracks.map((track) => (
            <TrackCard track={track} key={track.uri} />
        ))
        }
        </section>
        <section className='footer'>
            { historyTracks.length === 0 ? null : ( 
            <footer>
            <Player  
                />
            </footer>
            )}
        </section>
    </React.Fragment>
    )
}

export default History;
