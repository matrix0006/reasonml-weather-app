Util.requireCSS("./UVIndexStyle.scss")

[@react.component]
let make = () => {
  <Card>
    <h5 className="card-title mb-4"> {"UV index" |> React.string} </h5>
  </Card>
};
