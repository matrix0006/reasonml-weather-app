

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Decode_AsResult_OfParseError from "bs-decode/src/Decode_AsResult_OfParseError.bs.js";

function make(temp, pressure, humidity) {
  return {
          temp: temp,
          pressure: pressure,
          humidity: humidity
        };
}

function decode(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "humidity", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "pressure", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "temp", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make)))));
}

var Main = {
  make: make,
  decode: decode
};

function make$1(id, main, description, icon) {
  return {
          id: id,
          main: main,
          description: description,
          icon: icon
        };
}

function decode$1(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "icon", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "description", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "main", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "id", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$1))))));
}

var Weather = {
  make: make$1,
  decode: decode$1
};

function make$2(deg, speed) {
  return {
          deg: deg,
          speed: speed
        };
}

function decode$2(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "speed", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "deg", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$2))));
}

var Wind = {
  make: make$2,
  decode: decode$2
};

function make$3(sunrise, sunset) {
  return {
          sunrise: sunrise,
          sunset: sunset
        };
}

function decode$3(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "sunset", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "sunrise", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$3))));
}

var Sys = {
  make: make$3,
  decode: decode$3
};

function make$4(id, name, main, cod, weather, wind, dt, timezone, visibility, sys) {
  return {
          id: id,
          name: name,
          main: main,
          cod: cod,
          weather: weather,
          wind: wind,
          dt: dt,
          timezone: timezone,
          visibility: visibility,
          sys: sys
        };
}

function decode$4(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "sys", decode$3, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "visibility", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "timezone", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "dt", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "wind", decode$2, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "weather", Curry._1(Decode_AsResult_OfParseError.Pipeline.array, decode$1), Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "cod", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "main", decode, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "name", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "id", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$4))))))))))));
}

var $$Response = {
  make: make$4,
  decode: decode$4
};

function make$5(aqi) {
  return {
          aqi: aqi
        };
}

function decode$5(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "aqi", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$5)));
}

var AirData = {
  make: make$5,
  decode: decode$5
};

function make$6(status, data) {
  return {
          status: status,
          data: data
        };
}

function decode$6(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "data", decode$5, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "status", Decode_AsResult_OfParseError.Pipeline.string, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$6))));
}

var Air = {
  make: make$6,
  decode: decode$6
};

function make$7(uv) {
  return {
          uv: uv
        };
}

function decode$7(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "uv", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$7)));
}

var UvIndexData = {
  make: make$7,
  decode: decode$7
};

function make$8(data, count) {
  return {
          data: data,
          count: count
        };
}

function decode$8(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "count", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "data", Curry._1(Decode_AsResult_OfParseError.Pipeline.array, decode$7), Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$8))));
}

var UvIndex = {
  make: make$8,
  decode: decode$8
};

function make$9(code, description, icon) {
  return {
          code: code,
          description: description,
          icon: icon
        };
}

function decode$9(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "icon", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "description", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "code", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$9)))));
}

var ForecastWeather = {
  make: make$9,
  decode: decode$9
};

function make$10(datetime, temp, weather) {
  return {
          datetime: datetime,
          temp: temp,
          weather: weather
        };
}

function decode$10(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "weather", decode$9, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "temp", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "datetime", Decode_AsResult_OfParseError.Pipeline.string, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$10)))));
}

var ForecastData = {
  make: make$10,
  decode: decode$10
};

function make$11(data) {
  return {
          data: data
        };
}

function decode$11(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "data", Curry._1(Decode_AsResult_OfParseError.Pipeline.array, decode$10), Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$11)));
}

var Forecast = {
  make: make$11,
  decode: decode$11
};

var Decode;

export {
  Decode ,
  Main ,
  Weather ,
  Wind ,
  Sys ,
  $$Response ,
  AirData ,
  Air ,
  UvIndexData ,
  UvIndex ,
  ForecastWeather ,
  ForecastData ,
  Forecast ,
  
}
/* Decode_AsResult_OfParseError Not a pure module */
