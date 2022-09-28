import React, { useEffect, useState } from 'react';
import Cricketer from '../Cricketer/Cricketer';
import './Player.css'

const Player = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    return (
        <div className='player-container'>
            <div className="players-container">
                {
                    players.map(player => <Cricketer
                        key={player.name}
                        player={player}
                    ></Cricketer>)
                }
            </div>
            <div className="cart-container">
                <h4>order summary</h4>
            </div>
        </div>
    );
};

export default Player;