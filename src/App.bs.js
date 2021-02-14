

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Relude_AsyncResult from "relude/src/Relude_AsyncResult.bs.js";
import * as API$ReasonmlReactApp from "./utils/API.bs.js";
import * as Spinner$ReasonmlReactApp from "./components/spinner/Spinner.bs.js";
import * as LeftSection$ReasonmlReactApp from "./layout/left-section/LeftSection.bs.js";
import * as RightSection$ReasonmlReactApp from "./layout/right-section/RightSection.bs.js";

require("./AppStyle.scss");

function App(Props) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          Curry._1(setState, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.weather(undefined).then(function (data) {
                return Promise.resolve(Curry._1(setState, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), []);
  var exit = 0;
  var weatherData;
  if (typeof state === "number") {
    exit = 1;
  } else if (state.TAG === /* Reloading */0) {
    var weatherData$1 = state._0;
    if (weatherData$1.TAG === /* Ok */0) {
      weatherData = weatherData$1._0;
      exit = 2;
    } else {
      exit = 1;
    }
  } else {
    var weatherData$2 = state._0;
    if (weatherData$2.TAG !== /* Ok */0) {
      return React.createElement("span", undefined, "Error occured. Please try again");
    }
    weatherData = weatherData$2._0;
    exit = 2;
  }
  switch (exit) {
    case 1 :
        return React.createElement(Spinner$ReasonmlReactApp.make, {});
    case 2 :
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
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
