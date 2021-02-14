open Relude.Globals
module Decode = Decode.AsResult.OfParseError

module Main = {
  type t = {
    temp: float,
    pressure: float,
    humidity: int,
  }

  let make = (temp, pressure, humidity) => {
    temp: temp,
    pressure: pressure,
    humidity: humidity,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("temp", floatFromNumber)
    |> field("pressure", floatFromNumber)
    |> field("humidity", intFromNumber)
    |> run(json)    
  }
}

module Weather = {
  type t = {
    main: string,
    description: string,
    icon: string,
  }

  let make = (main, description, icon) => {
    main: main,
    description: description,
    icon: icon,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("main", string)
    |> field("description", string)
    |> field("icon", string)
    |> run(json)
  }
}

module Wind = {
  type t = {
    deg: float,
    speed: float
  }

  let make = (deg, speed) => {
    deg: deg,
    speed: speed
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure>=> {
    open Decode.Pipeline
    succeed(make)
    |> field("deg", floatFromNumber)  
    |> field("speed", floatFromNumber)  
    |> run(json)
  }
}

module Sys = {
  type t = {
    sunrise: float,
    sunset: float
  }

  let make = (sunrise, sunset) => {
    sunrise: sunrise,
    sunset: sunset
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure>=> {
    open Decode.Pipeline
    succeed(make)
    |> field("sunrise", floatFromNumber)
    |> field("sunset", floatFromNumber)
    |> run(json)
  }
}

module Response = {
  type t = {
    id: int,
    name: string,
    main: Main.t,
    weather: array<Weather.t>,
    wind: Wind.t,
    dt: float,
    timezone: float,
    visibility: int,
    sys: Sys.t
  }

  let make = (
    id,
    name,
    main,
    weather,
    wind,
    dt,
    timezone,
    visibility,
    sys
  ) => {
    id : id,
    name : name,
    main : main,
    weather : weather,
    wind : wind,
    dt : dt,
    timezone : timezone,
    visibility : visibility,
    sys : sys
  }

  let decode = (json: Js.Json.t)=> {
    open Decode.Pipeline
    succeed(make)
    |> field("id", intFromNumber)
    |> field("name", string)
    |> field("main", Main.decode)
    |> field("weather", array(Weather.decode))
    |> field("wind", Wind.decode)
    |> field("dt", floatFromNumber)
    |> field("timezone", floatFromNumber)
    |> field("visibility", intFromNumber)
    |> field("sys", Sys.decode)
    |> run(json)
  }
}
