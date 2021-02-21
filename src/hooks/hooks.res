open Relude.Globals
open Js.Promise

let useWeather = (input: string) => {
  let (weather, setWeather) = React.useState(() => AsyncResult.init)

  React.useEffect1(() => {
    setWeather(_prev => _prev |> AsyncResult.toBusy)

    API.weather(input)
    |> then_(data =>
      setWeather(_prev =>
        switch data {
        | Ok(ok) => AsyncResult.completeOk(ok)
        | Error(error) => AsyncResult.completeError(error)
        }
      ) |> resolve
    )
    |> ignore

    None
  }, [input])

  (weather, setWeather)
}

let useAir = (input: string) => {
  let (air, setAir) = React.useState(() => AsyncResult.init)

  React.useEffect1(() => {
    setAir(_prev => _prev |> AsyncResult.toBusy)

    API.air(input)
    |> then_(data =>
      setAir(_prev =>
        switch data {
        | Ok(ok) => AsyncResult.completeOk(ok)
        | Error(error) => AsyncResult.completeError(error)
        }
      ) |> resolve
    )
    |> ignore

    None
  }, [input])

  (air, setAir)
}

let useUvIndex = (input: string) => {
  let (uvIndex, setUvIndex) = React.useState(() => AsyncResult.init)
  React.useEffect1(() => {
    setUvIndex(_prev => _prev |> AsyncResult.toBusy)

    API.uvIndex(input)
    |> then_(data =>
      setUvIndex(_prev =>
        switch data {
        | Ok(ok) => AsyncResult.completeOk(ok)
        | Error(error) => AsyncResult.completeError(error)
        }
      ) |> resolve
    )
    |> ignore

    None
  }, [input])

  (uvIndex, setUvIndex)
}

let useForecast = (input: string) => {
  let (forecast, setForecast) = React.useState(() => AsyncResult.init)

  React.useEffect1(() => {
    setForecast(_prev => _prev |> AsyncResult.toBusy)

    API.forecast(input)
    |> then_(data =>
      setForecast(_prev =>
        switch data {
        | Ok(ok) => AsyncResult.completeOk(ok)
        | Error(error) => AsyncResult.completeError(error)
        }
      ) |> resolve
    )
    |> ignore

    None
  }, [input])

  (forecast, setForecast)
}
