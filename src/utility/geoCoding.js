const request =require('request')
const geocoding = (address='boston',callback) =>{ //address ='boston' is a default parameter
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidWRpdHR5YWdpNDU1IiwiYSI6ImNrcjJ0Z3doNjB0ZWQyeHFtZWF4M2tibzUifQ.3k3PuhMuU5fc0pYvyvqarQ&limit=1`
  
    request({url,json: true},(error,{body})=>{
       if(error){ 
          callback("Oops ! Something went wrong ",undefined)
       } else if(body.features.length === 0){
          callback("Wrong location please! check the location ",undefined)
       } else{
          callback(undefined,{
                 longitude: body.features[0].center[0],
                 latitude : body.features[0].center[1],
                 location : body.features[0].place_name,
          })
       }
       
    })
  }

  module.exports =geocoding