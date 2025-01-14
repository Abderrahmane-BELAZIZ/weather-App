import React from 'react';
import {motion}  from "framer-motion";


function Rainy({width="250px" , height="250px"}) {
    return (
        <div>
        <svg
    height={height}
    width={width}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <motion.path
        initial={{  pathLength: 0 , x: 1}}
        animate={{  pathLength: 1 , x:[2.5,-10,1] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#F7B239"
        d="M438.358,129.146c0,15.156-2.604,29.676-7.409,43.187c-16.891-23.653-76.829,31.643-108.125,31.643 c-16.658,0-56.408-27.084-69.945-19.429c-20.13-33.433-66.059,9.715-46.63-50.516c2.661-8.247-12.71-43.564-20.832-41.737 C201.259,38.925,250.689,0,309.213,0C380.534,0,438.358,57.824,438.358,129.146z"
      />
      <motion.path
        initial={{  pathLength: 0 , x: 2.5}}
        animate={{  pathLength: 1 , x:[2.5,-10,1] }}
        transition={{ duration: 4 , repeat: Infinity }}
        fill="#F7B239"
        d="M349.168,6.311C336.585,2.22,323.158,0,309.213,0c-58.524,0-107.954,38.925-123.796,92.293 c8.122-1.826,16.567-2.785,25.233-2.785c11.394,0,22.395,1.667,32.788,4.751C258.584,47.766,299.399,12.872,349.168,6.311z"
      />
      <motion.path
        initial={{  pathLength: 0 , x: 2.5}}
        animate={{  pathLength: 1 , x:[2.5,-10,2.5] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#bfbfbf"
        d="M448.268,224.677c24.819,1.606,44.469,22.228,44.469,47.461c0,26.27-21.295,47.565-47.565,47.565 c-14.637,0-331.478,0-351.375,0c-41.166,0-74.534-33.381-74.534-74.547s33.368-74.547,74.534-74.547 c2.293,0,4.547,0.117,6.775,0.324c11.995-39.262,44.391-69.599,84.845-78.64c8.122-1.826,16.567-2.785,25.233-2.785 c41.865,0,78.511,22.358,98.64,55.79c13.536-7.655,29.145-12.034,45.803-12.034c31.296,0,58.964,15.415,75.855,39.068 C441.532,187.138,447.905,205.169,448.268,224.677z"
      />
      <motion.path
        initial={{  pathLength: 0 , y: 2.5}}
        animate={{  pathLength: 1 , y:[2.5,-10,2.5] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#bfbfbf"
        d="M155.537,512c-3.806,0-7.42-2.251-8.973-5.986L86.331,361.26c-2.061-4.953,0.284-10.641,5.237-12.702 c4.951-2.061,10.641,0.284,12.702,5.237l60.233,144.755c2.061,4.953-0.284,10.641-5.237,12.702 C158.045,511.76,156.781,512,155.537,512z"
      />
      <motion.path
        initial={{  pathLength: 0 , y: 2.5}}
        animate={{  pathLength: 1 , y:[2.5,-10,2.5] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#bfbfbf"
        d="M252.597,512c-3.806,0-7.42-2.251-8.973-5.986L183.391,361.26 c-2.061-4.953,0.284-10.641,5.237-12.702c4.951-2.061,10.64,0.284,12.702,5.237l60.233,144.755 c2.061,4.953-0.284,10.641-5.238,12.702C255.106,511.76,253.842,512,252.597,512z"
      />
      <motion.path
        initial={{  pathLength: 0 , y: 2.5}}
        animate={{  pathLength: 1 , y:[2.5,-10,2.5] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#bfbfbf"
        d="M349.67,512c-3.806,0-7.42-2.251-8.974-5.986L280.463,361.26c-2.061-4.953,0.284-10.641,5.238-12.702 c4.951-2.062,10.64,0.284,12.702,5.237l60.233,144.755c2.061,4.953-0.284,10.641-5.238,12.702 C352.178,511.76,350.914,512,349.67,512z"
      />
      <motion.path
        initial={{  pathLength: 0 , y: 2.5}}
        animate={{  pathLength: 1 , y:[2.5,-10,2.5] }}
        transition={{ duration: 4 , repeat: Infinity , ease: "easeInOut"}}
        fill="#bfbfbf"
        d="M446.73,512c-3.806,0-7.42-2.251-8.974-5.986L377.523,361.26c-2.061-4.953,0.284-10.641,5.238-12.702 c4.951-2.062,10.639,0.284,12.702,5.237l60.233,144.755c2.061,4.953-0.284,10.641-5.238,12.702 C449.239,511.76,447.974,512,446.73,512z"
      />
    </g>
  </svg>

        </div>
    );
}

export default Rainy;