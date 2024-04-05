import React from 'react';
import image from '../../Assets/image/weather/cloud-moon.png'
import {motion}  from "framer-motion";

function RainyNight(props) {
    return (
        <div>
         <motion.img initial={{ 
        opacity : 0.8,
         x:5
        
     }}
    animate={{ 
        opacity :1 , 
        x:[10,0,10]    
    }}
     transition={{ 
        opacity : {
            duration : 2,
            repeat : null
        },
        ease:"linear",
        duration : 4,
        repeat : Infinity,
        delay:1
       
        
      
       }} src={image} width={"250px"} height={"250px"} alt="" />  
        </div>
    );
}

export default RainyNight;