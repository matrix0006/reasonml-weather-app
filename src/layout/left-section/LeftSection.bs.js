

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./LeftSection.scss");

function LeftSection(Props) {
  var weatherData = Props.weatherData;
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col col-wrapper py-3"
                }, React.createElement("div", {
                      className: "flex-row d-flex text-input-wrapper spacing"
                    }, React.createElement("input", {
                          className: "text-input",
                          placeholder: "Search for places..."
                        }), React.createElement("div", {
                          className: "icon-wrapper"
                        }, React.createElement("img", {
                              className: "icon",
                              src: require("../../assets/icons/location.png")
                            }))), React.createElement("i", {
                      className: "wi wi-day-cloudy weather-icon-large spacing-small"
                    }), React.createElement("div", {
                      className: "spacing-small temparature-text large-text"
                    }, Util$ReasonmlReactApp.round(Util$ReasonmlReactApp.kToC(weatherData.main.temp))), React.createElement("div", {
                      className: "spacing-small"
                    }, Util$ReasonmlReactApp.convertToDate(Util$ReasonmlReactApp.toMs(weatherData.dt))), React.createElement("hr", {
                      className: "spacing-small"
                    }), Belt_Array.mapWithIndex(weatherData.weather, (function (i, weather) {
                        return React.createElement("div", {
                                    key: i.toString(),
                                    className: "flex-row d-flex spacing-small"
                                  }, React.createElement("i", {
                                        className: Util$ReasonmlReactApp.makeIcon(weatherData.id)
                                      }), React.createElement("div", undefined, weather.main, React.createElement("span", {
                                            className: "mx-2"
                                          }, "-"), weather.description));
                      }))));
}

var make = LeftSection;

export {
  make ,
  
}
/*  Not a pure module */
