[@react.component]
let make = (~humidity: int) => {
  let toHumidityScale = (humidity: int): string =>
    switch (humidity) {
    | humidity when humidity >= 60 => "Uncomfortably Wet"
    | humidity when humidity >= 20 && humidity < 60 => "Comfort Range"
    | _ => "Uncomfortably Dry"
    };

  <Card>
    <h5 className="card-title mb-4"> {"Humidity" |> React.string} </h5>
    <div className="card-number mb-4 flex-row d-flex justify-content-between">
      <span>
        {humidity
          |> Js.Int.toString
          |> Js.String.concat("%")
          |> React.string}
      </span>
      <Slider percentage={humidity -> float_of_int} />
    </div>
    <div> {humidity |> toHumidityScale |> React.string} </div>
  </Card>
};
