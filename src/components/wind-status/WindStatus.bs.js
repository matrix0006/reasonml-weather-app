

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./WindStatus.scss");

function WindStatus(Props) {
  var wind = Props.wind;
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "Wind Status"), React.createElement("div", {
                  className: "card-number mb-4"
                }, Util$ReasonmlReactApp.round(Util$ReasonmlReactApp.msTokmh(wind.speed)).concat("km/h")), React.createElement("div", {
                  className: "flex-row d-flex align-items-center"
                }, React.createElement("i", {
                      className: "wi wi-wind towards-113-deg weather-icon"
                    }), Util$ReasonmlReactApp.windDirectionFromDegrees(wind.deg)));
}

var make = WindStatus;

export {
  make ,
  
}
/*  Not a pure module */
