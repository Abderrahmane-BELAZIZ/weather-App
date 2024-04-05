import React from 'react';
import {motion}  from "framer-motion";

function Thunder({height = "250px" , width= '250px'}) {
    return (
        <div>
      <svg
      version="1.1"
      id="Uploaded to svgrepo.com"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      fill="#000000"
      width={width}
      height={height}
    >
      <style type="text/css">
        {`
          .avocado_een{fill:#000000;}
          .avocado_zeven{fill:#A3AEB5;}
          .avocado_twintig{fill:#EAD13F;}
          .st0{fill:#A3AEB5;}
          .st1{fill:#FFFAEE;}
          .st2{fill:#AF9480;}
          .st3{fill:#DBD2C1;}
          .st4{fill:#CC4121;}
          .st5{fill:#C3CC6A;}
          .st6{fill:#D1712A;}
          .st7{fill:#E0A838;}
          .st8{fill:#716558;}
          .st9{fill:#6F9B45;}
          .st10{fill:#0E608E;}
          .st11{fill:#E598A3;}
          .st12{fill:#3D3935;}
          .st13{fill:#248EBC;}
          .st14{fill:#BF63C1;}
        `}
      </style>
      <g>
        <g>
          <motion.polygon initial={{ y:0 }} animate={{ y:[0,-2,0] }} transition={{ duration:3 , repeat:Infinity , ease:"linear", delay:1 }} className="avocado_twintig" points="12.738,25.5 9.809,25.5 12.309,20.5 19.793,20.5 16.793,23.5 19.462,23.5 11.108,29.576 "></motion.polygon>
        </g>
        <motion.path initial={{ y:0 }} animate={{ y:[0,-0.5,0] }} transition={{ duration:3 , repeat:Infinity , ease:"linear", delay:1 }} className="avocado_zeven" d="M9,20.5c-3.584,0-6.5-2.916-6.5-6.5c0-3.332,2.495-6.109,5.804-6.462l0.347-0.037l0.085-0.338 C9.577,3.829,12.564,1.5,16,1.5c4.136,0,7.5,3.364,7.5,7.5v0.5H24c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H9z"></motion.path>
      </g>
    </svg>



        </div>
    );
}

export default Thunder;