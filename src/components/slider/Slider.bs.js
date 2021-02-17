

import * as React from "react";

require("./SliderStyle.scss");

function Slider(Props) {
  var percentage = Props.percentage;
  var inputRef = React.useRef(null);
  var percentageVal = percentage !== undefined ? percentage : 0;
  return React.createElement("div", {
              className: "slider"
            }, React.createElement("input", {
                  ref: inputRef,
                  type: "range",
                  value: percentageVal.toString()
                }));
}

var make = Slider;

export {
  make ,
  
}
/*  Not a pure module */
