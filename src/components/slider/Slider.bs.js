

import * as React from "react";

require("./SliderStyle.scss");

function Slider(Props) {
  var percentage = Props.percentage;
  React.useEffect((function () {
          console.log(percentage);
          
        }), []);
  var percentageVal = percentage !== undefined ? percentage : 0;
  return React.createElement("div", {
              className: "slider"
            }, React.createElement("input", {
                  type: "range",
                  value: percentageVal.toString()
                }));
}

var make = Slider;

export {
  make ,
  
}
/*  Not a pure module */
