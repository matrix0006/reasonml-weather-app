

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";

require("./UVIndexStyle.scss");

function UVIndex(Props) {
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: React.createElement("h5", {
                    className: "card-title mb-4"
                  }, "UV index")
            });
}

var make = UVIndex;

export {
  make ,
  
}
/*  Not a pure module */
