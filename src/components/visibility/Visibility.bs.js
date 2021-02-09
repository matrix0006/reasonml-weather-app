

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";

function Visibility(Props) {
  var visibility = Props.visibility;
  var toVisibilityScale = function (visibility) {
    if (visibility >= 50000) {
      return "Exceptionally clear";
    } else if (visibility < 50000 && visibility >= 20000) {
      return "Very clear";
    } else if (visibility < 20000 && visibility >= 10000) {
      return "Clear";
    } else if (visibility < 10000 && visibility >= 4000) {
      return "Light haze";
    } else if (visibility < 4000 && visibility >= 2000) {
      return "Haze";
    } else if (visibility < 2000 && visibility >= 1000) {
      return "Thin fog";
    } else if (visibility < 1000 && visibility >= 500) {
      return "Light fog";
    } else if (visibility < 500 && visibility >= 200) {
      return "Moderate fog";
    } else if (visibility < 200 && visibility >= 50) {
      return "Thick fog";
    } else {
      return "Dense fog";
    }
  };
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "Visibility"), React.createElement("div", {
                  className: "card-number mb-4"
                }, visibility.toString().concat("m")), React.createElement("div", undefined, toVisibilityScale(visibility)));
}

var make = Visibility;

export {
  make ,
  
}
/* react Not a pure module */
