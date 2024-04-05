import React from 'react';
import Cloud from '../../Assets/image/weather/cloud.png'
import {motion} from 'framer-motion'
function Cloudy({width = '250px' , height = '250px'}) {
    return (
       <motion.img initial={{ 
        opacity : 0.8,
         scale : 0.9 , 
        
     }}
    animate={{ 
        opacity :1 ,
        scale: [0.9, 1, 0.9, 1 , 0.9],           
    }}
     transition={{ 
        opacity : {
            duration : 2,
            repeat : null
        },
        ease:"linear",
        type : 'tween',
        duration : 4,
        repeat : Infinity,
        delay:1
        
      
       }}  src={Cloud} width={width} height={height}/>
    );
}

export default Cloudy;