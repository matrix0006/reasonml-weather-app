

import * as React from "react";

function Card(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "card highlight-card h-100",
              style: {
                borderRadius: "20px"
              }
            }, React.createElement("div", {
                  className: "card-body"
                }, children));
}

var make = Card;

export {
  make ,
  
}
/* react Not a pure module */
