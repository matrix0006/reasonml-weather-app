

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./LeftSection.scss");

function LeftSection(Props) {
  var weatherData = Props.weatherData;
  var onInputChange = Props.onInputChange;
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col col-wrapper py-3"
                }, React.createElement("div", {
                      className: "flex-row d-flex text-input-wrapper spacing"
                    }, React.createElement("input", {
                          className: "text-input",
                          placeholder: "Search for places...",
                          onChange: (function ($$event) {
                              return Curry._1(onInputChange, Util$ReasonmlReactApp.valueFromEvent($$event));
                            })
                        }), React.createElement("div", {
                          className: "icon-wrapper"
                        }, React.createElement("img", {
                              className: "icon",
                              src: require("../../assets/icons/location.png")
                            }))), React.createElement("i", {
                      className: Util$ReasonmlReactApp.makeWeatherIcon(weatherData.cod) + " weather-icon icon-large spacing-small"
                    }), React.createElement("div", {
                      className: "spacing-small temparature-text large-text"
                    }, Util$ReasonmlReactApp.round(1, Util$ReasonmlReactApp.kToC(weatherData.main.temp))), React.createElement("div", {
                      className: "spacing-small"
                    }, Util$ReasonmlReactApp.convertToDate(Util$ReasonmlReactApp.toMs(weatherData.dt))), React.createElement("hr", {
                      className: "spacing-small"
                    }), Belt_Array.mapWithIndex(weatherData.weather, (function (i, weather) {
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
                      }))));
}

var make = LeftSection;

export {
  make ,
  
}
/*  Not a pure module */
