

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Relude_Array from "relude/src/Relude_Array.bs.js";
import * as UVIndex$ReasonmlReactApp from "../../components/uv-index/UVIndex.bs.js";
import * as Humidity$ReasonmlReactApp from "../../components/humidity/Humidity.bs.js";
import * as AirQuality$ReasonmlReactApp from "../../components/air-quality/AirQuality.bs.js";
import * as Visibility$ReasonmlReactApp from "../../components/visibility/Visibility.bs.js";
import * as WindStatus$ReasonmlReactApp from "../../components/wind-status/WindStatus.bs.js";
import * as WeatherCard$ReasonmlReactApp from "../../components/weather-card/WeatherCard.bs.js";
import * as SunriseSunset$ReasonmlReactApp from "../../components/sunrise-sunset/SunriseSunset.bs.js";

require("./RightSection.scss");

function RightSection(Props) {
  var weatherData = Props.weatherData;
  var airData = Props.airData;
  var uvIndex = Props.uvIndex;
  var forecast = Props.forecast;
  var uvDataOpt = Relude_Array.head(uvIndex.data);
  var uvData = uvDataOpt !== undefined ? uvDataOpt.uv : 0;
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col py-3 px-5"
                }, React.createElement("div", {
                      className: "row"
                    }, Belt_Array.mapWithIndex(Relude_Array.take(7, Relude_Array.drop(1, forecast.data)), (function (index, item) {
                            return React.createElement("div", {
                                        key: String(index),
                                        className: "col"
                                      }, React.createElement(WeatherCard$ReasonmlReactApp.make, {
                                            weatherInfo: item
                                          }));
                          }))), React.createElement("h4", undefined, "Today's highlights"), React.createElement("div", {
                      className: "row row-cols-1 row-cols-md-3 g-4"
                    }, React.createElement("div", {
                          className: "col"
                        }, React.createElement(UVIndex$ReasonmlReactApp.make, {
                              uvIndex: uvData
                            })), React.createElement("div", {
                          className: "col"
                        }, React.createElement(WindStatus$ReasonmlReactApp.make, {
                              wind: weatherData.wind
                            })), React.createElement("div", {
                          className: "col"
                        }, React.createElement(SunriseSunset$ReasonmlReactApp.make, {
                              sys: weatherData.sys,
                              timezone: weatherData.timezone
                            })), React.createElement("div", {
                          className: "col"
                        }, React.createElement(Humidity$ReasonmlReactApp.make, {
                              humidity: weatherData.main.humidity
                            })), React.createElement("div", {
                          className: "col"
                        }, React.createElement(Visibility$ReasonmlReactApp.make, {
                              visibility: weatherData.visibility
                            })), React.createElement("div", {
                          className: "col"
                        }, React.createElement(AirQuality$ReasonmlReactApp.make, {
                              air: airData.data.aqi
                            })))));
}

var make = RightSection;

export {
  make ,
  
}
/*  Not a pure module */
