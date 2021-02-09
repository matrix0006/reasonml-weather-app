[@react.component]
let make = (~visibility: int) => {
  let toVisibilityScale = (visibility: int) =>
    switch (visibility) {
    | visibility when visibility >= 50000 => "Exceptionally clear"
    | visibility when visibility < 50000 && visibility >= 20000 => "Very clear"
    | visibility when visibility < 20000 && visibility >= 10000 => "Clear"
    | visibility when visibility < 10000 && visibility >= 4000 => "Light haze"
    | visibility when visibility < 4000 && visibility >= 2000 => "Haze"
    | visibility when visibility < 2000 && visibility >= 1000 => "Thin fog"
    | visibility when visibility < 1000 && visibility >= 500 => "Light fog"
    | visibility when visibility < 500 && visibility >= 200 => "Moderate fog"
    | visibility when visibility < 200 && visibility >= 50 => "Thick fog"
    | _ => "Dense fog"
    };

  <Card>
    <h5 className="card-title mb-4"> {"Visibility" |> React.string} </h5>
    <div className="card-number mb-4">
      {visibility |> Js.Int.toString |> Js.String.concat("m") |> React.string}
    </div>
    <div> {visibility |> toVisibilityScale |> React.string} </div>
  </Card>
};
