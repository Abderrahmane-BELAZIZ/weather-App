import React from 'react';
import location from '../../Assets/image/weather/pin.png'
function Location({width = '20px' , height = '20px'}) {
    return (
       <img  src={location} width={width} height={height}/>
    );
}

export default Location;