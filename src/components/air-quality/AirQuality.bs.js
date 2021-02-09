

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Slider$ReasonmlReactApp from "../slider/Slider.bs.js";

function AirQuality(Props) {
  var airQualityIndex = Props.airQualityIndex;
  var toAirQualityScale = function (airQualityIndex) {
    switch (airQualityIndex) {
      case 1 :
          return "Good";
      case 2 :
          return "Fair";
      case 3 :
          return "Moderate";
      case 4 :
          return "Poor";
      case 5 :
          return "Very Poor";
      default:
        return "";
    }
  };
  var toPercentage = function (airQualityIndex) {
    return airQualityIndex / 5 * 100.0;
  };
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "Air Quality"), React.createElement("div", {
                  className: "card-number mb-4 flex-row d-flex justify-content-between"
                }, React.createElement("span", undefined, airQualityIndex.toString()), React.createElement(Slider$ReasonmlReactApp.make, {
                      percentage: toPercentage(airQualityIndex)
                    })), React.createElement("div", undefined, toAirQualityScale(airQualityIndex)));
}

var make = AirQuality;

export {
  make ,
  
}
/* react Not a pure module */
