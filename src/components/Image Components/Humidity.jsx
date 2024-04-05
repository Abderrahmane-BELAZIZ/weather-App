import React from 'react';
import { motion} from  "framer-motion";

function Humidity({width='35px', height='35px'}) {
    return (
        <div>
             <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height={height}
      width={width}
     
    >
      <motion.path
        fill="#00FFFF"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
       
        d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z"
      />
      <motion.path
        fill="#00FFFF"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M344 328a72 72 0 01-72 72"
        initial={{ 
          y: -48,
         }}
         animate={{
          y:[-48, 30 , -48]
         }}
         transition={{ 
          duration : 2 , 
          repeat: Infinity
          }}
      />
    </svg>
        </div>
    );
}

export default Humidity;