module Weather = {
  let apiKey = "486699348d13d23e215f3c3415bfb96d"
  let fetch: string => string = location =>
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=` ++ apiKey
}

module Air = {
  let token = "3bddfe1c5704b7314024abed471200c3dd3314bc"
  let fetch: string => string = location =>
    `https://api.waqi.info/feed/${location}/?token=` ++ token
}

module UvIndex = {
  let apiKey = "8e05c75ba0f4470483e969c99170b4c6"
  let fetch: string => string = location =>
    `https://api.weatherbit.io/v2.0/current?city=${location}&key=` ++ apiKey
}

module Forecast = {
  let apiKey = "8e05c75ba0f4470483e969c99170b4c6"
  let fetch: string => string = location =>
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=` ++ apiKey
}
