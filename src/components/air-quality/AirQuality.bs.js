

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Slider$ReasonmlReactApp from "../slider/Slider.bs.js";

function AirQuality(Props) {
  var air = Props.air;
  var toAirQualityScale = function (air) {
    if (air >= 0 && air <= 50) {
      return "Good";
    } else if (air >= 51 && air <= 100) {
      return "Moderate";
    } else if (air >= 101 && air <= 150) {
      return "Unhealthy for Sensitive Groups";
    } else if (air >= 151 && air <= 200) {
      return "Unhealthy";
    } else if (air >= 201 && air <= 300) {
      return "Very Unhealthy";
    } else if (air > 300) {
      return "Hazardous";
    } else {
      return "";
    }
  };
  var toPercentage = function (air) {
    if (air > 300) {
      return 100.0;
    } else {
      return air / 300 * 100;
    }
  };
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "Air Quality"), React.createElement("div", {
                  className: "card-number mb-4 flex-row d-flex justify-content-between"
                }, React.createElement("span", undefined, air.toString()), React.createElement(Slider$ReasonmlReactApp.make, {
                      percentage: toPercentage(air)
                    })), React.createElement("div", undefined, toAirQualityScale(air)));
}

var make = AirQuality;

export {
  make ,
  
}
/* react Not a pure module */
