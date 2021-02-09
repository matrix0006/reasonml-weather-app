

import * as React from "react";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Slider$ReasonmlReactApp from "../slider/Slider.bs.js";

function Humidity(Props) {
  var humidity = Props.humidity;
  var toHumidityScale = function (humidity) {
    if (humidity >= 60) {
      return "Uncomfortably Wet";
    } else if (humidity >= 20 && humidity < 60) {
      return "Comfort Range";
    } else {
      return "Uncomfortably Dry";
    }
  };
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "Humidity"), React.createElement("div", {
                  className: "card-number mb-4 flex-row d-flex justify-content-between"
                }, React.createElement("span", undefined, humidity.toString().concat("%")), React.createElement(Slider$ReasonmlReactApp.make, {
                      percentage: humidity
                    })), React.createElement("div", undefined, toHumidityScale(humidity)));
}

var make = Humidity;

export {
  make ,
  
}
/* react Not a pure module */
