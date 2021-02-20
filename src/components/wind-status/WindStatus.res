open Util
Util.requireCSS("./WindStatus.scss")

@react.component
let make = (~wind: Shape.Wind.t) => {
  <Card>
    <h5 className="card-title mb-4"> {"Wind Status" |> React.string} </h5>
    <div className="card-number mb-4">
      {wind.speed |> msTokmh |> round(2) |> Js.String.concat("km/h") |> React.string}
    </div>
    <div className="flex-row d-flex align-items-center">
      <i className={`${makeWindIcon(wind.deg)} weather-icon`} />
      {wind.deg |> windDirectionFromDegrees |> React.string}
    </div>
  </Card>
}
