open Types;
open Util;

[@react.component]
let make = (~sys: sys, ~timezone: float) => {
  React.useEffect0(() => {
    Js.log((sys.sunrise +. timezone) *. 1000.0 |> Js.Date.fromFloat);
    None;
  });

  <Card>
    <h5 className="card-title mb-5"> {"Sunrise & Sunset" |> React.string} </h5>
    <div className="flex-row d-flex align-items-center mb-4">
      <i className="wi wi-sunrise weather-icon mr-2" />
      <span>
        {sys.sunrise |> toMs |> Js.Date.fromFloat |> getTime |> React.string}
      </span>
    </div>
    <div className="flex-row d-flex align-items-center">
      <i className="wi wi-sunset  weather-icon" />
      <span>
        {sys.sunset |> toMs |> Js.Date.fromFloat |> getTime |> React.string}
      </span>
    </div>
  </Card>;
};
