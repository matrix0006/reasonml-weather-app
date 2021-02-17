module Weather = {
  let apiKey = "486699348d13d23e215f3c3415bfb96d"
  let fetch: unit => string = () =>
    "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=" ++ apiKey
}

module Air = {
  let token = "3bddfe1c5704b7314024abed471200c3dd3314bc"
  let fetch: unit => string = () => "https://api.waqi.info/feed/bangkok/?token=" ++ token
}

module UvIndex = {
  let apiKey = "8e05c75ba0f4470483e969c99170b4c6"
  let fetch: unit => string = () =>
    "https://api.weatherbit.io/v2.0/current?city=Bangkok&key=" ++ apiKey
}


module Forecast = {
  let apiKey = "8e05c75ba0f4470483e969c99170b4c6"
  let fetch: unit => string = () =>
    "https://api.weatherbit.io/v2.0/forecast/daily?city=Bangkok&key=" ++ apiKey
}
