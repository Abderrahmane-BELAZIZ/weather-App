import React from 'react';
import image from '../../Assets/image/weather/snowflake.png'
import {motion}  from "framer-motion";

function Snow(props) {
    return (
        <div>
             <motion.img
      src={image}
      width={"250px"}
      height={"250px"}
      alt=""
      style={{ originX: 0.5, originY: 0.5 }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        delay:1
      }}
    />
        </div>
    );
}

export default Snow;