

import * as React from "react";

require("./Spinner.scss");

function Spinner(Props) {
  return React.createElement("div", {
              className: "loader"
            });
}

var make = Spinner;

export {
  make ,
  
}
/*  Not a pure module */
