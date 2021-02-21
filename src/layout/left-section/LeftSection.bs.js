

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./LeftSection.scss");

function LeftSection(Props) {
  var weatherData = Props.weatherData;
  var onClick = Props.onClick;
  var match = React.useState(function () {
        return "";
      });
  var setValue = match[1];
  var value = match[0];
  var onSubmit = function (e) {
    e.preventDefault();
    return Curry._1(onClick, value);
  };
  var tmp;
  if (typeof weatherData === "number" || weatherData.TAG !== /* Complete */1) {
    tmp = React.createElement("div", undefined);
  } else {
    var weatherData$1 = weatherData._0;
    if (weatherData$1.TAG === /* Ok */0) {
      var weatherData$2 = weatherData$1._0;
      tmp = React.createElement(React.Fragment, undefined, React.createElement("i", {
                className: Util$ReasonmlReactApp.makeWeatherIcon(weatherData$2.cod) + " weather-icon icon-large spacing-small"
              }), React.createElement("div", {
                className: "spacing-small temparature-text large-text"
              }, Util$ReasonmlReactApp.round(1, Util$ReasonmlReactApp.kToC(weatherData$2.main.temp))), React.createElement("div", {
                className: "spacing-small"
              }, Util$ReasonmlReactApp.convertToDate(Util$ReasonmlReactApp.toMs(weatherData$2.dt))), React.createElement("hr", {
                className: "spacing-small"
              }), Belt_Array.mapWithIndex(weatherData$2.weather, (function (i, weather) {
                  return React.createElement("div", {
                              key: i.toString(),
                              className: "flex-row d-flex spacing-small align-items-center"
                            }, React.createElement("span", {
                                  className: "weather-icon icon-small mr-3"
                                }, React.createElement("i", {
                                      className: Util$ReasonmlReactApp.makeWeatherIcon(weather.id)
                                    })), React.createElement("div", undefined, weather.main, React.createElement("span", {
                                      className: "mx-2"
                                    }, "-"), weather.description));
                })));
    } else {
      tmp = React.createElement("span", {
            className: "text-danger"
          }, "City doesn't exist. Please try again");
    }
  }
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col col-wrapper py-3"
                }, React.createElement("form", {
                      className: "flex-row d-flex text-input-wrapper spacing",
                      onSubmit: onSubmit
                    }, React.createElement("input", {
                          className: "text-input",
                          placeholder: "Enter city name...",
                          value: value,
                          onChange: (function ($$event) {
                              return Curry._1(setValue, Util$ReasonmlReactApp.valueFromEvent($$event));
                            })
                        }), React.createElement("button", {
                          className: "icon-wrapper",
                          type: "submit"
                        }, React.createElement("img", {
                              className: "icon",
                              src: require("../../assets/icons/location.png")
                            }))), tmp));
}

var make = LeftSection;

export {
  make ,
  
}
/*  Not a pure module */
