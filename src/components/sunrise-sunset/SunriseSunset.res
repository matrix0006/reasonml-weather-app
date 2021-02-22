open Util

@react.component
let make = (~sys: Shape.Sys.t, ~timezone: float) => {
  // React.useEffect0(() => {
  //   Js.log((sys.sunrise +. timezone) *. 1000.0 |> Js.Date.fromFloat)
  //   None
  // })

  <Card>
    <h5 className="card-title mb-3"> {"Sunrise & Sunset" |> React.string} </h5>
    <div className="flex-row d-flex align-items-center mb-3">
      <i className="wi wi-sunrise weather-icon mr-2" />
      <span className="card-number">
        {sys.sunrise |> toMs |> Js.Date.fromFloat |> getTime |> React.string}
      </span>
    </div>
    <div className="flex-row d-flex align-items-center">
      <i className="wi wi-sunset weather-icon" />
      <span className="card-number">
        {sys.sunset |> toMs |> Js.Date.fromFloat |> getTime |> React.string}
      </span>
    </div>
  </Card>
}
