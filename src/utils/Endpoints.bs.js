


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

export {
  Weather ,
  Air ,
  
}
/* No side effect */
