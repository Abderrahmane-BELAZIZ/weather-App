import React from 'react';
import thermometre from '../../Assets/image/weather/thermometre.png'
function Thermometer({width='45px' , height='45px' , color='#ff8000'}) {
    return (
        <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 24 24">
                    <path d="M8,5H4A1,1,0,0,1,4,3H8A1,1,0,0,1,8,5ZM8,7H6A1,1,0,0,0,6,9H8A1,1,0,0,0,8,7Zm13,9a6,6,0,1,1-9-5.191V5a3,3,0,0,1,6,0v5.809A5.992,5.992,0,0,1,21,16Zm-3,0a2.99,2.99,0,0,0-2-2.816V5a1,1,0,0,0-2,0v8.184A2.995,2.995,0,1,0,18,16Z"/>
                    </svg>
        </div>
    );
}

export default Thermometer;