


var apiKey = "486699348d13d23e215f3c3415bfb96d";

function $$fetch(param) {
  return "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=486699348d13d23e215f3c3415bfb96d";
}

var Weather = {
  apiKey: apiKey,
  $$fetch: $$fetch
};

var token = "3bddfe1c5704b7314024abed471200c3dd3314bc";

function $$fetch$1(param) {
  return "https://api.waqi.info/feed/bangkok/?token=3bddfe1c5704b7314024abed471200c3dd3314bc";
}

var Air = {
  token: token,
  $$fetch: $$fetch$1
};

var apiKey$1 = "8e05c75ba0f4470483e969c99170b4c6";

function $$fetch$2(param) {
  return "https://api.weatherbit.io/v2.0/current?city=Bangkok&key=8e05c75ba0f4470483e969c99170b4c6";
}

var UvIndex = {
  apiKey: apiKey$1,
  $$fetch: $$fetch$2
};

var apiKey$2 = "8e05c75ba0f4470483e969c99170b4c6";

function $$fetch$3(param) {
  return "https://api.weatherbit.io/v2.0/forecast/daily?city=Bangkok&key=8e05c75ba0f4470483e969c99170b4c6";
}

var Forecast = {
  apiKey: apiKey$2,
  $$fetch: $$fetch$3
};

export {
  Weather ,
  Air ,
  UvIndex ,
  Forecast ,
  
}
/* No side effect */
