const request =require('request');

const forcast = (type=f,longitude,latitude,callback) =>{
 const url =`http://api.weatherstack.com/current?access_key=11eaf25434e0e372480d8c4b93bfd57d&query=${longitude},${latitude}&units=${type}`

 request({url,json: true},(error,{body})=>{
     if(error){
         callback("Oops! Something went wrong ",undefined);
     }if(body.error){
        callback("data not correct",undefined);
    }else{
        if(type === 'f'){
         callback(undefined,'It is currently :' +body.current.temperature + ' °F and it is :'+body.current.feelslike + ' °F out and the Rain description : '+body.current.weather_descriptions);
        }
        if(type === 'm'){
            callback(undefined,'It is currently :' +body.current.temperature + ' °C and it is :'+body.current.feelslike + ' °C out and the Rain description : '+body.current.weather_descriptions); 
        }
        
     }
 })

}

module.exports = forcast;