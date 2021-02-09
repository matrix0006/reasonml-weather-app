

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Decode$ReasonmlReactApp from "./utils/Decode.bs.js";
import * as LeftSection$ReasonmlReactApp from "./layout/left-section/LeftSection.bs.js";
import * as RightSection$ReasonmlReactApp from "./layout/right-section/RightSection.bs.js";

require("./AppStyle.scss");

function App(Props) {
  var match = React.useState(function () {
        return /* LoadingWeather */0;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=486699348d13d23e215f3c3415bfb96d").then(function (prim) {
                    return prim.json();
                  }).then(function (json) {
                  Curry._1(setState, (function (param) {
                          return /* LoadedWeather */{
                                  _0: Decode$ReasonmlReactApp.decodeResponse(json)
                                };
                        }));
                  return Promise.resolve(undefined);
                }).catch(function (_err) {
                Curry._1(setState, (function (param) {
                        return /* ErrorFetchingWeather */1;
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  if (typeof state === "number") {
    if (state !== 0) {
      return React.createElement("span", undefined, "Error occured. Please try again");
    } else {
      return React.createElement("span", undefined, "Loading");
    }
  }
  var weatherData = state._0;
  return React.createElement("div", {
              className: "body"
            }, React.createElement("div", {
                  className: "container-fluid h-100"
                }, React.createElement("div", {
                      className: "row h-100"
                    }, React.createElement("div", {
                          className: "left-section"
                        }, React.createElement(LeftSection$ReasonmlReactApp.make, {
                              weatherData: weatherData
                            })), React.createElement("div", {
                          className: "right-section"
                        }, React.createElement(RightSection$ReasonmlReactApp.make, {
                              weatherData: weatherData
                            })))));
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
