open Js.Promise
open Fetch
open Relude.Globals

module Decode = Decode.AsResult.OfParseError

let parseJsonIfOk: Fetch.Response.t => Js.Promise.t<Result.t<Js.Json.t, Fetch.Response.t>> = resp =>
  if Fetch.Response.ok(resp) {
    resp
    |> Response.json
    |> then_(json => json |> Result.ok |> resolve)
    |> catch(_error => resp |> Result.error |> resolve)
  } else {
    resp |> Result.error |> resolve
  }

let getErrorBodyJson: Result.t<Js.Json.t, Fetch.Response.t> => Js.Promise.t<
  Result.t<Js.Json.t, Error.t>,
> = x =>
  switch x {
  | Ok(_json) as ok => ok |> resolve
  | Error(resp) =>
    resp
    |> Response.json
    |> then_(json =>
      Error.fetch((resp |> Fetch.Response.status, resp |> Fetch.Response.statusText, #json(json)))
      |> Result.error
      |> resolve
    )
  }

let getErrorBodyText: Result.t<Js.Json.t, Fetch.Response.t> => Js.Promise.t<
  Result.t<Js.Json.t, Error.t>,
> = x =>
  switch x {
  | Ok(_json) as ok => ok |> resolve
  | Error(resp) =>
    let status = resp |> Fetch.Response.status
    let statusText = resp |> Fetch.Response.statusText
    let bodyText = #text("FIXME: show body text instead")

    Error.fetch((status, statusText, bodyText)) |> Result.error |> resolve
  }

let weather: string => Js.Promise.t<Result.t<Shape.Response.t, Error.t>> = location => {
  Endpoints.Weather.fetch(location)
  |> fetchWithInit(_, RequestInit.make(~method_=Get, ()))
  |> then_(parseJsonIfOk)
  |> then_(getErrorBodyJson)
  |> then_(result =>
    result
    |> Result.flatMap(json => json |> Shape.Response.decode |> Result.mapError(Error.decode))
    |> resolve
  )
}

let air: string => Js.Promise.t<Result.t<Shape.Air.t, Error.t>> = location => {
  Endpoints.Air.fetch(location)
  |> fetchWithInit(_, RequestInit.make(~method_=Get, ()))
  |> then_(parseJsonIfOk)
  |> then_(getErrorBodyText)
  |> then_(result =>
    result
    |> Result.flatMap(json => json |> Shape.Air.decode |> Result.mapError(Error.decode))
    |> resolve
  )
}

let uvIndex: string => Js.Promise.t<Result.t<Shape.UvIndex.t, Error.t>> = location => {
  Endpoints.UvIndex.fetch(location)
  |> fetchWithInit(_, RequestInit.make(~method_=Get, ()))
  |> then_(parseJsonIfOk)
  |> then_(getErrorBodyText)
  |> then_(result =>
    result
    |> Result.tap(Js.log)
    |> Result.flatMap(json => json |> Shape.UvIndex.decode |> Result.mapError(Error.decode))
    |> resolve
  )
}

let forecast: string => Js.Promise.t<Result.t<Shape.Forecast.t, Error.t>> = location => {
  Endpoints.Forecast.fetch(location)
  |> fetchWithInit(_, RequestInit.make(~method_=Get, ()))
  |> then_(parseJsonIfOk)
  |> then_(getErrorBodyText)
  |> then_(result =>
    result
    |> Result.flatMap(json => json |> Shape.Forecast.decode |> Result.mapError(Error.decode))
    |> resolve
  )
}
