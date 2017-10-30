const request = require('request');
const config = require('../../config/config.js');
const googleMapsClient = require('@google/maps');

console.log("inside navProcessor",config.GOOGLE_MAP.API_KEY);

googleMapsClient.createClient({
  key: 'AIzaSyBaZXWMI0YyLELs8ttMy11N_ZqQZoC29mY'
});
googleMapsClient.Geocode({
  address:'wipro technology,pdc-2,pune '
}).asPromise()
.then((response)=>{
  console.log(response.json.results);
})
.catch((err)=>{
  console.log(err);
});
module.exports = googleMapsClient
