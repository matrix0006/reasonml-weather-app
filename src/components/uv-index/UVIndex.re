open Util
Util.requireCSS("./UVIndex.scss")

[@react.component]
let make = (~uvIndex: float) => {
  let customStyle = ReactDOM.Style.make(());

  <Card>
    <h5 className="card-title mb-4"> {"UV index" |> React.string} </h5>
    <div className="flex-row d-flex align-items-center justify-content-center">
      <div style=(ReactDOMStyle.unsafeAddProp(customStyle, "--percentage", uvIndex |> toPercentage(12.0) |> Js.Float.toString)) className="semi-donut">
        <span className="index-value">{{uvIndex |> round(0) |> React.string}}</span>
      </div>
    </div>
  </Card>
};
