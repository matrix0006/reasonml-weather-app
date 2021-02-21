

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

function SunriseSunset(Props) {
  var sys = Props.sys;
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-5"
                }, "Sunrise & Sunset"), React.createElement("div", {
                  className: "flex-row d-flex align-items-center mb-4"
                }, React.createElement("i", {
                      className: "wi wi-sunrise weather-icon mr-2"
                    }), React.createElement("span", undefined, Util$ReasonmlReactApp.getTime(new Date(Util$ReasonmlReactApp.toMs(sys.sunrise))))), React.createElement("div", {
                  className: "flex-row d-flex align-items-center"
                }, React.createElement("i", {
                      className: "wi wi-sunset weather-icon"
                    }), React.createElement("span", undefined, Util$ReasonmlReactApp.getTime(new Date(Util$ReasonmlReactApp.toMs(sys.sunset))))));
}

var make = SunriseSunset;

export {
  make ,
  
}
/* react Not a pure module */
