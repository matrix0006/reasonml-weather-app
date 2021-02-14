

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

function make$1(main, description, icon) {
  return {
          main: main,
          description: description,
          icon: icon
        };
}

function decode$1(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "icon", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "description", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "main", Decode_AsResult_OfParseError.Pipeline.string, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$1)))));
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
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "speed", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "deg", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$2))));
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

function make$4(id, name, main, weather, wind, dt, timezone, visibility, sys) {
  return {
          id: id,
          name: name,
          main: main,
          weather: weather,
          wind: wind,
          dt: dt,
          timezone: timezone,
          visibility: visibility,
          sys: sys
        };
}

function decode$4(json) {
  return Curry._2(Decode_AsResult_OfParseError.Pipeline.run, json, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "sys", decode$3, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "visibility", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "timezone", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "dt", Decode_AsResult_OfParseError.Pipeline.floatFromNumber, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "wind", decode$2, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "weather", Curry._1(Decode_AsResult_OfParseError.Pipeline.array, decode$1), Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "main", decode, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "name", Decode_AsResult_OfParseError.Pipeline.string, Curry._3(Decode_AsResult_OfParseError.Pipeline.field, "id", Decode_AsResult_OfParseError.Pipeline.intFromNumber, Curry._1(Decode_AsResult_OfParseError.Pipeline.succeed, make$4)))))))))));
}

var $$Response = {
  make: make$4,
  decode: decode$4
};

var Decode;

export {
  Decode ,
  Main ,
  Weather ,
  Wind ,
  Sys ,
  $$Response ,
  
}
/* Decode_AsResult_OfParseError Not a pure module */