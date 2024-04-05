import React from 'react';
import styles from './Weather.module.scss'
import { Card } from 'react-bootstrap';
import Cloudy from '../Image Components/Cloudy';
import Location from '../Image Components/Location';
import DefaultWeather from '../Image Components/DefaultWeather';  
import Thermometer from '../Image Components/Thermometer';
import Horloge from '../Image Components/Horloge';
import Wind from '../Image Components/Wind';
import Sunrise from '../Image Components/Sunrise';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import Speedometre from '../Image Components/Speedometre';
import Humidity from '../Image Components/Humidity';
import Sunny from '../Image Components/Sunny';
import FewClouds from '../Image Components/FewClouds';
import BrockenClouds from '../Image Components/BrockenClouds';
import ShowerRain from '../Image Components/ShowerRain';
import Rainy from '../Image Components/Rainy';
import Thunder from '../Image Components/Thunder';
import Snow from '../Image Components/Snow';
import Mist from '../Image Components/Mist';
import RainyNight from '../Image Components/RainyNight';
import FewCloudsNight from '../Image Components/FewCloudsNight';
import Moon from '../Image Components/Moon';
import {motion}  from "framer-motion";
function Weather(props) {
    const weather = useSelector(({weather}) => weather);
    const DisplayIconWeather = ()=>{
        const nameIcon = weather.weather.icon; 
        console.log(nameIcon);
        switch(nameIcon) {
        case "01d" : return  <Sunny/> 
        case "01n" : return  <Moon/> 
        case "02d" : return  <FewClouds/>
        case "02n" : return  <FewCloudsNight/>
        case "03d" : case "03n" : return <Cloudy/> 
        case "04d" : case "04n" : return <BrockenClouds/>
        case "09d" : case "09n" : return <ShowerRain/>
        case "10d" : return <Rainy/>
        case "10n" : return <RainyNight/>
        case "11d" : case "11n" : return <Thunder/>
        case "13d" : case "13n" : return <Snow/>
        case "50d" : case "50n" : return <Mist/>
        default : return  <img src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt=""  />

    }
    }
    return (
        <>
        {console.log(weather)}
        
      
            <Card className={styles.container}>
                {weather.isLoaded ? 
                 <motion.div 
                 initial={{ opacity: 0.5, y: -50 }} 
                 animate={{ opacity: 1, y: 0 }}   
                 transition={{ duration:3 }}   
                 >
 
                 <Card.Body>
                   <Card.Title>
                    {weather.name} , {weather.sys.country}<Location/>
                    <div className={styles.date}>
                        <div>
                            <Moment format='MMMM Do dddd y , hh:mm'/>
                        </div>
                        <div><Horloge/></div>
                        
                        </div>
                   </Card.Title>
                   <Card.Text as={'div'} className={styles.weather_info}>
                      <div>
                         
                        {DisplayIconWeather()}
                        {/* <DefaultWeather width={'250px'} height={'250px'} /> */}
                        
                      </div>
                      <div className= { styles.temperature}>
                        <span>{weather.main.feels_like} C</span>
                        <span><Thermometer/></span>
                        
                        </div>
                    
                        <div>Welcome to <strong> {weather.name}</strong></div>
                        <div className={styles.infos}>
                         <div>
                            <div><Sunrise/></div>
                            <div>Sunrise</div>
                            <div> 
                             <Moment unix={true}  format="HH:mm">
                                {weather.sys.sunrise}
                             </Moment>
                            </div>
                         </div>
                         <div>
                            <div><Speedometre/></div>
                            <div>Speedometre</div>
                            <div>{weather.main.pressure} Pa</div>
                         </div>
                         <div>
                            <div><Humidity/></div>
                            <div>Humidty</div>
                            <div>{weather.main.humidity} %</div>
                         </div>
                         <div>
                            <div><Wind/></div>
                            <div>Wind</div>
                            <div>{weather.wind.speed} m/s</div>
                         </div>
                           <div>
                           <div><Thermometer color={"orange"} width='35px'  height='35px'/></div>
                            <div>Temp</div>
                            <div>{weather.main.temp_max} C</div>
                         </div>
                        </div>
                   </Card.Text>
                   </Card.Body>
                   </motion.div> : 
                    
                   <Card.Body>
                      <motion.div 
                 initial={{ opacity: 0, y: -50 }} // Initial animation state
                 animate={{ opacity: 1, y: 0 }}   // Animation state when component mounts
                 transition={{ duration: 1.5 }}   // Duration of the animation
                 >
                <Card.Title>
                    Please select a city
                </Card.Title>
                </motion.div>
                   </Card.Body>
                  
            }
               
            </Card>
           
        </>
    );
}

export default Weather;