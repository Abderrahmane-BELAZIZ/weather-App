import React from 'react';
import image from '../../Assets/image/weather/BrockenClouds.png'
import {motion} from  "framer-motion";
function BrockenClouds(props) {
    return (
        <div>
            <motion.img
            initial={{ 
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
                
              }}
            src={image} width={'250px'}  height={"250px"} alt="" />
        </div>
    );
}

export default BrockenClouds;