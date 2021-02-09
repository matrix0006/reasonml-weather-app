

import * as React from "react";

function WeatherCard(Props) {
  var weatherInfo = Props.weatherInfo;
  return React.createElement("div", {
              className: "card text-center custom-card"
            }, React.createElement("div", {
                  className: "card-body py-3"
                }, React.createElement("div", {
                      className: "mb-3"
                    }, weatherInfo.name), React.createElement("i", {
                      className: "wi wi-day-cloudy weather-icon mb-3 custom-icon "
                    }), React.createElement("div", undefined, weatherInfo.name)));
}

var make = WeatherCard;

export {
  make ,
  
}
/* react Not a pure module */
