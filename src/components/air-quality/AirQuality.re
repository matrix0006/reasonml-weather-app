open Util

[@react.component]
let make = (~air: int) => {
  let toAirQualityScale = (air: int): string =>
    switch (air) {
    | air when air >= 0 && air <= 50  => "Good"
    | air when air >= 51 && air <= 100 => "Moderate"
    | air when air >= 101 && air <= 150 => "Unhealthy for Sensitive Groups"
    | air when air >= 151 && air <= 200 => "Unhealthy"
    | air when air >= 201 && air <= 300 => "Very Unhealthy"
    | air when air > 300 => "Hazardous"
    | _ => ""
    };

  <Card> 
    <h5 className="card-title mb-4"> {"Air Quality" |> React.string} </h5>
    <div className="card-number mb-4 flex-row d-flex justify-content-between">
      <span>
        {air |> Js.Int.toString |> React.string}
      </span>
      <Slider percentage={air |> toPercentage(300)} />
    </div>
    <div> {air |> toAirQualityScale |> React.string} </div>
  </Card>;
};
