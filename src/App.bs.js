

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Hooks$ReasonmlReactApp from "./hooks/hooks.bs.js";
import * as Spinner$ReasonmlReactApp from "./components/spinner/Spinner.bs.js";
import * as LeftSection$ReasonmlReactApp from "./layout/left-section/LeftSection.bs.js";
import * as RightSection$ReasonmlReactApp from "./layout/right-section/RightSection.bs.js";

require("./App.scss");

function App(Props) {
  var match = React.useState(function () {
        return "Saigon";
      });
  var setSearchTerm = match[1];
  var searchTerm = match[0];
  var match$1 = Hooks$ReasonmlReactApp.useWeather(searchTerm);
  var weather = match$1[0];
  var match$2 = Hooks$ReasonmlReactApp.useAir(searchTerm);
  var air = match$2[0];
  var match$3 = Hooks$ReasonmlReactApp.useUvIndex(searchTerm);
  var uvIndex = match$3[0];
  var match$4 = Hooks$ReasonmlReactApp.useForecast(searchTerm);
  var forecast = match$4[0];
  var appState = [
    weather,
    air,
    uvIndex,
    forecast
  ];
  var onClick = function ($$event) {
    return Curry._1(setSearchTerm, (function (param) {
                  return $$event;
                }));
  };
  if (typeof weather !== "number" && weather.TAG === /* Complete */1 && typeof air !== "number" && air.TAG === /* Complete */1 && typeof uvIndex !== "number" && uvIndex.TAG === /* Complete */1 && typeof forecast !== "number" && forecast.TAG === /* Complete */1) {
    return React.createElement("div", {
                className: "body"
              }, React.createElement("div", {
                    className: "container-fluid h-100"
                  }, React.createElement("div", {
                        className: "row h-100"
                      }, React.createElement("div", {
                            className: "left-section"
                          }, React.createElement(LeftSection$ReasonmlReactApp.make, {
                                weatherData: {
                                  TAG: /* Complete */1,
                                  _0: weather._0
                                },
                                onClick: onClick
                              })), React.createElement("div", {
                            className: "right-section"
                          }, React.createElement(RightSection$ReasonmlReactApp.make, {
                                appState: appState
                              })))));
  }
  return React.createElement(Spinner$ReasonmlReactApp.make, {});
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
