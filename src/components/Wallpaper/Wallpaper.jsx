import React from 'react';
import wallpaper from '../../Assets/image/wallpaper.jpg';
import './Wallpaper.scss'
function Wallpaper(props) {
    return (
        
            <div className='wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0'>
                <img className='wallpaper' src={wallpaper} alt="wallpaper" />
            </div>
       
    );
}

export default Wallpaper;