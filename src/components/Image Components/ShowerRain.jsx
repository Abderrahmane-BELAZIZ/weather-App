import React from 'react';
import {motion}  from "framer-motion";

function ShowerRain({width = "250px" , height='250px'}) {
    return (
        <div>
<svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 387.991 387.991"
      xmlSpace="preserve"
      fill="#000000"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
        <motion.path
            initial={{  pathLength: 0 , x: 1}}
            animate={{  pathLength: 1 , x:[2.5,-10,1] }}
            transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
            style={{ fill: '#8f8f8f'}}
            d="M70.699,92.389c-0.009-0.525-0.02-1.049-0.02-1.575C70.679,40.659,111.338,0,161.493,0 c43.222,0,79.388,30.196,88.562,70.643c8.555-4.789,18.409-7.531,28.91-7.531c32.766,0,59.328,26.562,59.328,59.328 c0,1.339-0.06,2.664-0.148,3.981c24.325,9.03,41.661,32.444,41.661,59.911c0,35.286-28.605,63.892-63.892,63.892H88.051 c-44.108,0-79.865-35.757-79.865-79.865C8.186,132.21,34.935,100.314,70.699,92.389z"
          ></motion.path>
          <g>
          <motion.rect x="57.644" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="39.746"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity, ease:"linear" , delay:1 } }}
      ></motion.rect>
      <motion.rect x="57.644" y="323.243" style={{ fill: '#00FFFF' }} width="15" height="64.748"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity, ease:"linear",delay:1 } }}
      ></motion.rect>
      <motion.rect x="89.855" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="120.111"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity, ease:"linear" ,  } }}
      ></motion.rect>
      <motion.rect x="122.074" y="267.88" style={{ fill: '#00FFFF'  , }} width="15" height="63.807"
         animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity, ease:"linear",delay:1 } }}
      ></motion.rect>
      <motion.rect x="122.074" y="346.484" style={{ fill: '#00FFFF' }} width="15" height="41.507"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity, ease:"linear",delay:1 } }}
      ></motion.rect>
      <motion.rect x="154.285" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="120.111"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" } }}
      ></motion.rect>
      <motion.rect x="218.708" y="353.181" style={{ fill: '#00FFFF' }} width="15" height="34.81"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear",delay:1 } }}
      ></motion.rect>
      <motion.rect x="218.708" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="69.883"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" ,delay:1} }}
      ></motion.rect>
      <motion.rect x="186.497" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="25.483"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear"  } }}
      ></motion.rect>
      <motion.rect x="186.497" y="307.633" style={{ fill: '#00FFFF' }} width="15" height="80.358"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" } }}
      ></motion.rect>
      <motion.rect x="250.919" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="56.623"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity } , ease:"linear",delay:1 }}
      ></motion.rect>
      <motion.rect x="250.919" y="339.381" style={{ fill: '#00FFFF' }} width="15" height="48.61"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear",delay:1 } }}
      ></motion.rect>
      <motion.rect x="283.138" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="86.465"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" ,delay:1 } }}
      ></motion.rect>
      <motion.rect x="283.138" y="368.625" style={{ fill: '#00FFFF' }} width="15" height="19.366"
        animate={{ y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" } }}
      ></motion.rect>
      <motion.rect x="315.349" y="267.88" style={{ fill: '#00FFFF' }} width="15" height="120.111"
        animate={{  y: [100, -15, 100], transition: { duration: 2, repeat: Infinity , ease:"linear" } }}
      ></motion.rect>
          </g>
        </g>
      </g>
    </svg>        </div>
    );
}

export default ShowerRain;