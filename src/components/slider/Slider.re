Util.requireCSS("./SliderStyle.scss");

[@react.component]
let make = (~percentage=?) => {
  let inputRef = React.useRef(Js.Nullable.null);

  /* React.useEffect(() => { */
  /*   Js.log(inputRef.current.onchange) */
  /*   None; */
  /* }); */

  let percentageVal = switch(percentage){
    | None => 0.;
    | Some(percentage) => percentage;
  };

  <div className="slider">
    <input ref={ReactDOM.Ref.domRef(inputRef)} type_="range" value={percentageVal |> Js.Float.toString}/>
  </div>
};
