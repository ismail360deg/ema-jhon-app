import React from 'react';
import './Cricketer.css'

const Cricketer = (props) => {
    console.log(props.player)
    const { picture, name, time } = props.player
    return (
        <div className='cricketer'>
            <img src={picture} alt=""></img>
            <div className='cricketer-info'>
                <h3 className='cricketer-name'>{name}</h3>
                <h4>Time-Requried: {time}h</h4>
            </div>
            <button className='btn-cart'>
                <h4>Add To Cart</h4>
            </button>
        </div>
    );
};

export default Cricketer;