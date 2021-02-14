open Relude.Globals
open Js.Promise
Util.requireCSS("./AppStyle.scss");

@react.component
let make = () => {
  let (state, setState) = React.useState(() => AsyncResult.init);

  React.useEffect1(() => {
    setState(_prev => _prev |> AsyncResult.toBusy)

    API.weather()
    |> then_ (data => 
        setState(_prev =>
          switch data {
          | Ok(ok) => AsyncResult.completeOk(ok)
          | Error(error) => AsyncResult.completeError(error)
          }
        ) |> resolve)
    |> ignore

    None
  }, [])

  switch (state) {
  | Init | Loading | Reloading(Error(_)) => <Spinner/>
  | Complete(Error(_)) => <span> {"Error occured. Please try again" |> React.string} </span>
  | Reloading(Ok(weatherData)) | Complete(Ok(weatherData)) =>
    <div className="body">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="left-section"> <LeftSection weatherData /> </div>
          <div className="right-section"> <RightSection weatherData /> </div>
        </div>
      </div>
    </div>
  };
};
