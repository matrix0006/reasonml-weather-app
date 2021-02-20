

import * as React from "react";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./WeatherCard.scss");

function WeatherCard(Props) {
  var weatherInfo = Props.weatherInfo;
  return React.createElement("div", {
              className: "card text-center custom-card"
            }, React.createElement("div", {
                  className: "card-body py-3"
                }, React.createElement("div", {
                      className: "mb-5 card-custom-title"
                    }, Util$ReasonmlReactApp.dateToDay(weatherInfo.datetime)), React.createElement("i", {
                      className: "wi wi-owm-" + weatherInfo.weather.code.toString() + " weather-icon mb-5 custom-icon"
                    }), React.createElement("div", {
                      className: "card-temp"
                    }, weatherInfo.temp.toString())));
}

var make = WeatherCard;

export {
  make ,
  
}
/*  Not a pure module */
