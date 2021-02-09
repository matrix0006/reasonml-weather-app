[@react.component]
let make = (~airQualityIndex: int) => {
  let toAirQualityScale = (airQualityIndex: int): string =>
    switch (airQualityIndex) {
    | 1 => "Good"
    | 2 => "Fair"
    | 3 => "Moderate"
    | 4 => "Poor"
    | 5 => "Very Poor"
    | _ => ""
    };

  let toPercentage = (airQualityIndex: int): float => (airQualityIndex -> float_of_int /. 5.) *. 100.0;

  <Card>
    <h5 className="card-title mb-4"> {"Air Quality" |> React.string} </h5>
    <div className="card-number mb-4 flex-row d-flex justify-content-between">
      <span>
        {airQualityIndex |> Js.Int.toString |> React.string}
      </span>
      <Slider percentage={airQualityIndex |> toPercentage} />
    </div>
    <div> {airQualityIndex |> toAirQualityScale |> React.string} </div>
  </Card>;
};
