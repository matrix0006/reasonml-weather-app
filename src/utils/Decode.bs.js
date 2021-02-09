

import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";

function decodeMain(json) {
  return {
          temp: Json_decode.field("temp", Json_decode.$$float, json),
          pressure: Json_decode.field("pressure", Json_decode.$$float, json),
          humidity: Json_decode.field("humidity", Json_decode.$$int, json)
        };
}

function decodeWeather(json) {
  return {
          main: Json_decode.field("main", Json_decode.string, json),
          description: Json_decode.field("description", Json_decode.string, json),
          icon: Json_decode.field("icon", Json_decode.string, json)
        };
}

function decodeWind(json) {
  return {
          speed: Json_decode.field("speed", Json_decode.$$float, json),
          deg: Json_decode.field("deg", Json_decode.$$float, json)
        };
}

function decodeSys(json) {
  return {
          sunrise: Json_decode.field("sunrise", Json_decode.$$float, json),
          sunset: Json_decode.field("sunset", Json_decode.$$float, json)
        };
}

function decodeResponse(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          main: Json_decode.field("main", decodeMain, json),
          name: Json_decode.field("name", Json_decode.string, json),
          weather: Json_decode.field("weather", (function (param) {
                  return Json_decode.array(decodeWeather, param);
                }), json),
          wind: Json_decode.field("wind", decodeWind, json),
          dt: Json_decode.field("dt", Json_decode.$$float, json),
          timezone: Json_decode.field("timezone", Json_decode.$$float, json),
          visibility: Json_decode.field("visibility", Json_decode.$$int, json),
          sys: Json_decode.field("sys", decodeSys, json)
        };
}

export {
  decodeMain ,
  decodeWeather ,
  decodeWind ,
  decodeSys ,
  decodeResponse ,
  
}
/* No side effect */
