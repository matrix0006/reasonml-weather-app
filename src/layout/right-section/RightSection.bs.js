

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
  var appState = Props.appState;
  var match = appState[0];
  var exit = 0;
  if (typeof match === "number" || match.TAG !== /* Complete */1) {
    exit = 2;
  } else {
    var weatherData = match._0;
    if (weatherData.TAG === /* Ok */0) {
      var match$1 = appState[1];
      if (typeof match$1 === "number" || match$1.TAG !== /* Complete */1) {
        exit = 2;
      } else {
        var airData = match$1._0;
        var weatherData$1 = weatherData._0;
        if (airData.TAG === /* Ok */0) {
          var match$2 = appState[2];
          if (typeof match$2 === "number" || match$2.TAG !== /* Complete */1) {
            exit = 2;
          } else {
            var uvIndex = match$2._0;
            if (uvIndex.TAG === /* Ok */0) {
              var match$3 = appState[3];
              if (typeof match$3 === "number") {
                return React.createElement("div", undefined);
              }
              if (match$3.TAG !== /* Complete */1) {
                return React.createElement("div", undefined);
              }
              var forecast = match$3._0;
              if (forecast.TAG === /* Ok */0) {
                var uvDataOpt = Relude_Array.head(uvIndex._0.data);
                var uvData = uvDataOpt !== undefined ? uvDataOpt.uv : 0.0;
                return React.createElement("div", {
                            className: "row"
                          }, React.createElement("div", {
                                className: "col py-3 px-5"
                              }, React.createElement("div", {
                                    className: "row"
                                  }, Belt_Array.mapWithIndex(Relude_Array.take(7, Relude_Array.drop(1, forecast._0.data)), (function (index, item) {
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
                                            wind: weatherData$1.wind
                                          })), React.createElement("div", {
                                        className: "col"
                                      }, React.createElement(SunriseSunset$ReasonmlReactApp.make, {
                                            sys: weatherData$1.sys,
                                            timezone: weatherData$1.timezone
                                          })), React.createElement("div", {
                                        className: "col"
                                      }, React.createElement(Humidity$ReasonmlReactApp.make, {
                                            humidity: weatherData$1.main.humidity
                                          })), React.createElement("div", {
                                        className: "col"
                                      }, React.createElement(Visibility$ReasonmlReactApp.make, {
                                            visibility: weatherData$1.visibility
                                          })), React.createElement("div", {
                                        className: "col"
                                      }, React.createElement(AirQuality$ReasonmlReactApp.make, {
                                            air: airData._0.data.aqi
                                          })))));
              }
              exit = 2;
            } else {
              exit = 2;
            }
          }
        } else {
          exit = 2;
        }
      }
    }
    
  }
  if (exit === 2) {
    var match$4 = appState[1];
    var exit$1 = 0;
    if (typeof match$4 === "number" || !(match$4.TAG === /* Complete */1 && match$4._0.TAG !== /* Ok */0)) {
      exit$1 = 3;
    }
    if (exit$1 === 3) {
      var match$5 = appState[2];
      var exit$2 = 0;
      if (typeof match$5 === "number" || !(match$5.TAG === /* Complete */1 && match$5._0.TAG !== /* Ok */0)) {
        exit$2 = 4;
      }
      if (exit$2 === 4) {
        var match$6 = appState[3];
        if (typeof match$6 === "number") {
          return React.createElement("div", undefined);
        }
        if (match$6.TAG !== /* Complete */1) {
          return React.createElement("div", undefined);
        }
        if (match$6._0.TAG === /* Ok */0) {
          return React.createElement("div", undefined);
        }
        
      }
      
    }
    
  }
  return React.createElement("span", {
              className: "text-danger"
            }, "Error occured. Please try again");
}

var make = RightSection;

export {
  make ,
  
}
/*  Not a pure module */
