open Relude.Globals
open Js.Promise
Util.requireCSS("./AppStyle.scss");

@react.component
let make = () => {
  let (weather, setWeather) = React.useState(() => AsyncResult.init);
  let (air, setAir) = React.useState(() => AsyncResult.init);

  React.useEffect1(() => {
    setWeather(_prev => _prev |> AsyncResult.toBusy)

    API.weather()
    |> then_ (data => 
        setWeather(_prev =>
          switch data {
          | Ok(ok) => AsyncResult.completeOk(ok)
          | Error(error) => AsyncResult.completeError(error)
          }
        ) |> resolve)
    |> ignore

    None
  }, [])

  React.useEffect1(() => {
    setAir(_prev => _prev |> AsyncResult.toBusy)

    API.air()
    |> then_ (data => 
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


  switch (weather) {
  | Init | Loading | Reloading(Error(_)) => <Spinner/>
  | Complete(Error(_)) => <span> {"Error occured. Please try again" |> React.string} </span>
  | Reloading(Ok(weatherData)) | Complete(Ok(weatherData)) =>
    <div className="body">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="left-section"> <LeftSection weatherData /> </div>
          <div className="right-section">
            {
              switch (air) {
              | Init | Loading | Reloading(Error(_)) => <Spinner/>
              | Complete(Error(_)) => <span> {"Error occured. Please try again" |> React.string} </span>
              | Reloading(Ok(airData)) | Complete(Ok(airData)) =>
                <RightSection weatherData airData/> 
              }
            }
          </div>
        </div>
      </div>
    </div>
  };
};
