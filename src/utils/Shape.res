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
    id: int,
    main: string,
    description: string,
    icon: string,
  }

  let make = (id, main, description, icon) => {
    id: id,
    main: main,
    description: description,
    icon: icon,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("id", intFromNumber)
    |> field("main", string)
    |> field("description", string)
    |> field("icon", string)
    |> run(json)
  }
}

module Wind = {
  type t = {
    deg: int,
    speed: float,
  }

  let make = (deg, speed) => {
    deg: deg,
    speed: speed,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make) |> field("deg", intFromNumber) |> field("speed", floatFromNumber) |> run(json)
  }
}

module Sys = {
  type t = {
    sunrise: float,
    sunset: float,
  }

  let make = (sunrise, sunset) => {
    sunrise: sunrise,
    sunset: sunset,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
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
    cod: int,
    weather: array<Weather.t>,
    wind: Wind.t,
    dt: float,
    timezone: float,
    visibility: int,
    sys: Sys.t,
  }

  let make = (id, name, main, cod, weather, wind, dt, timezone, visibility, sys) => {
    id: id,
    name: name,
    main: main,
    cod: cod,
    weather: weather,
    wind: wind,
    dt: dt,
    timezone: timezone,
    visibility: visibility,
    sys: sys,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("id", intFromNumber)
    |> field("name", string)
    |> field("main", Main.decode)
    |> field("cod", intFromNumber)
    |> field("weather", array(Weather.decode))
    |> field("wind", Wind.decode)
    |> field("dt", floatFromNumber)
    |> field("timezone", floatFromNumber)
    |> field("visibility", intFromNumber)
    |> field("sys", Sys.decode)
    |> run(json)
  }
}

module AirData = {
  type t = {aqi: int}

  let make = aqi => {
    aqi: aqi,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make) |> field("aqi", intFromNumber) |> run(json)
  }
}

module Air = {
  type t = {
    status: string,
    data: AirData.t,
  }

  let make = (status, data) => {
    status: status,
    data: data,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make) |> field("status", string) |> field("data", AirData.decode) |> run(json)
  }
}

module UvIndexData = {
  type t = {uv: float}

  let make = uv => {
    uv: uv,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make) |> field("uv", floatFromNumber) |> run(json)
  }
}

module UvIndex = {
  type t = {data: array<UvIndexData.t>, count: int}

  let make = (data, count) => {
    data: data,
    count: count,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("data", array(UvIndexData.decode))
    |> field("count", intFromNumber)
    |> run(json)
  }
}

module ForecastWeather = {
  type t = {
    code: int,
    description: string,
    icon: string,
  }

  let make = (code, description, icon) => {
    code: code,
    description: description,
    icon: icon,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("code", intFromNumber)
    |> field("description", string)
    |> field("icon", string)
    |> run(json)
  }
}

module ForecastData = {
  type t = {
    datetime: string,
    temp: float,
    weather: ForecastWeather.t,
  }

  let make = (datetime, temp, weather) => {
    datetime: datetime,
    temp: temp,
    weather: weather,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make)
    |> field("datetime", string)
    |> field("temp", floatFromNumber)
    |> field("weather", ForecastWeather.decode)
    |> run(json)
  }
}

module Forecast = {
  type t = {data: array<ForecastData.t>}

  let make = data => {
    data: data,
  }

  let decode = (json: Js.Json.t): Result.t<t, Decode.ParseError.failure> => {
    open Decode.Pipeline
    succeed(make) |> field("data", array(ForecastData.decode)) |> run(json)
  }
}
