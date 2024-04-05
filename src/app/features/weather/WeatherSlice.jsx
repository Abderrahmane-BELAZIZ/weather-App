import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    clouds : "" ,
    main: "" , 
    sys: "" , 
    weather: "" , 
    name: "" , 
    wind: "" , 
    isLoaded : false,
}


export const WeatherSlice = createSlice({
    name : 'weather',
    initialState : INITIAL_STATE, 
    reducers : {
        setWeatherData : (  state , action)=>{
               const {clouds , main , sys , weather , name , wind}  = action.payload;
               state.clouds = clouds
               state.main= main ;
               state.sys = sys ;
               state.weather = weather[0] ;
               state.name = name ;
               state.wind = wind ;
               state.isLoaded = true; 
        }
        , 
        resetWeatherData : (state , action)=>{
            state.isLoaded = false;
        }
    }
})

export const {setWeatherData , resetWeatherData} = WeatherSlice.actions ;
export default WeatherSlice.reducer