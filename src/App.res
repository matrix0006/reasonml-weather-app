open Relude.Globals
open Js.Promise
Util.requireCSS("./App.scss")

@react.component
let make = () => {
  let (weather, setWeather) = React.useState(() => AsyncResult.init)
  let (air, setAir) = React.useState(() => AsyncResult.init)
  let (uvIndex, setUvIndex) = React.useState(() => AsyncResult.init)
  let (forecast, setForecast) = React.useState(() => AsyncResult.init)
  let appState = (weather, air, uvIndex, forecast)

  React.useEffect1(() => {
    setWeather(_prev => _prev |> AsyncResult.toBusy)

    API.weather()
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
  }, [])

  React.useEffect1(() => {
    setAir(_prev => _prev |> AsyncResult.toBusy)

    API.air()
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
  }, [])

  React.useEffect1(() => {
    setUvIndex(_prev => _prev |> AsyncResult.toBusy)

    API.uvIndex()
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
  }, [])

  React.useEffect1(() => {
    setForecast(_prev => _prev |> AsyncResult.toBusy)

    API.forecast()
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
  }, [])

  switch appState {
   | (Init, _ , _ , _)    => <Spinner/>
   | (_, Init , _, _)     => <Spinner/>
   | (_, _ , Init, _)     => <Spinner/>
   | (_, _ , _, Init)     => <Spinner/>
   | (Loading, _ , _, _)  => <Spinner/>
   | (_, Loading , _ ,_)  => <Spinner/>
   | (_, _ , Loading, _)  => <Spinner/>
   | (_, _ , _, Loading)  => <Spinner/>
   | (Complete(Error(_)), _ , _, _) => <span> {"Error occured. Please try again" |> React.string} </span> 
   | (_ , Complete(Error(_)) , _ , _) => <span> {"Error occured. Please try again" |> React.string} </span> 
   | (_ , _ , Complete(Error(_)), _) => <span> {"3" |> React.string} </span>  
   | (_ , _ , _, Complete(Error(_))) => <span> {"Error occured. Please try again" |> React.string} </span> 
   | (Complete(Ok(weatherData)), Complete(Ok(airData)), Complete(Ok(uvIndex)), Complete(Ok(forecast))) =>
    <div className="body">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="left-section"> <LeftSection weatherData /> </div>
          <div className="right-section">
            <RightSection weatherData airData uvIndex forecast/>
          </div>
        </div>
      </div>
    </div>
    | (_, _ , _, _) => <div></div>
  }
}
