import React from 'react';
import clock from '../../Assets/image/weather/clock.png'
function Horloge({width='15px' ,height='15px' }) {
    return (
        <div>
            <img src={clock} width={width} height={height} alt="horloge" />
        </div>
    );
}

export default Horloge;