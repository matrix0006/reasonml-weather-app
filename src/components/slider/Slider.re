Util.requireCSS("./SliderStyle.scss");

[@react.component]
let make = (~percentage=?) => {
  React.useEffect0(() => {
    Js.log(percentage);
    None;
  });
  let percentageVal = switch(percentage){
    | None => 0.;
    | Some(percentage) => percentage;
  };

  <div className="slider">
    <input type_="range" value={percentageVal |> Js.Float.toString}/>
  </div>
};
