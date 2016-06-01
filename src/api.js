var _ = require('lodash');
var rootUrl= 'http://api.openweathermap.org/data/2.5/weather?APPID=bde302a4acbccac33eaae9157d1d4293';

var kelvinToCelcius = function(kelvin) {
  return Math.round(kelvin - 273.15) + '˚C';
  //kelvin to F  Math.round((kelvin - 273.25) * 1.8 + 32)
}

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`

  return fetch(url)
            .then(function(response) {
              return response.json()
            })
            .then(function(json) {
              return{
                city: json.name,
                temparature:kelvinToCelcius(json.main.temp),
                description: _.capitalize(json.weather[0].description)
              }
            })
}
