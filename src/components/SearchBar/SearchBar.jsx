import { Button, Form, FormGroup } from "react-bootstrap"
import styles from './SearchBar.module.scss'
import { Autocomplete, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { resetWeatherData, setWeatherData } from "../../app/features/weather/WeatherSlice"
import Location from "../Image Components/Location"

export const SearchBar = ()=>{
    const [unity , setUnity] = useState("metric")
    const [cities , setCities] = useState([])
    const Geo_Api_Key = 'cc6a9efa793542b7998da85328334669'
    const Weather_Api_Key = '5670cca3260cd9ace8c242d76105f17b'
    const dispatch = useDispatch()
    const [GeoLocation , setGeoLocation] = useState(undefined)
    const [isCurrentLocation , setIsCurrentLocation] = useState(false)

    const getGeoLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
              setIsCurrentLocation(true)
              setGeoLocation(
                {
                    lon : position.coords.longitude , 
                    lat : position.coords.latitude
                }
              )
        })
    } 
    const HasGeoLocation = () =>{
        return navigator.geolocation
    } 

    useEffect(()=>{
        if(HasGeoLocation()){
            getGeoLocation()
        }
    },[])
    useEffect(()=>{
        getData()
    },[GeoLocation])

 

    const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    // console.log(Geo_Api_Key)
    //console.log(value)
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${Geo_Api_Key}`)
        .then(response => response.json())
        .then(response => {
            if (response.results) { 
                setCities(response.results.map(data => {
                    const { lon, lat, city, country, formatted } = data
                    //console.log(formatted)
                    return { lon, lat, city, country, formatted }
                }));
            } else {
                setCities([]); 
            }
        })
}
     

    const getData = ()=>{
        if(GeoLocation){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${GeoLocation.lat}&units=${unity}&lon=${GeoLocation.lon}&appid=${Weather_Api_Key}`)
            .then(response=> response.json())
            .then(response =>{
               //console.log(response)
               const {clouds , main , sys , weather , name , wind} = response
               dispatch(setWeatherData({clouds , main , sys , weather , name , wind}))
          })

        }
         
        
     
    }
    const handleAutoCompleteChange = (e,value)=>{
        if(value !== null){
          //console.log(e);
          console.log(value);
          const {lon , lat} = value
          setIsCurrentLocation(false)
          setGeoLocation(
            {
                lon , 
                lat 
            }
          )
          }else{
        dispatch(resetWeatherData())
       }
    }
    return (
        <>
           <Form >
            <FormGroup className={`${styles.searchContainer}`}>
                <Autocomplete 
                clearOnBlur={false}
                 className={styles.inputSearch} 
                 onChange={handleAutoCompleteChange} 
                 renderInput={params => <TextField onChange={handleInputChange} {...params} label=" Enter your city ..."/>}
                 getOptionLabel={(option) =>{ 
                    //console.log(option.formatted)
                    console.log(cities)
                   return  option.formatted}}
                   options={cities}/>
                   
               <Button disabled={GeoLocation===undefined || isCurrentLocation}   size="lg" onClick={getGeoLocation}  variant="primary"><Location/></Button>
            </FormGroup>
           </Form>
        </>
    )
}