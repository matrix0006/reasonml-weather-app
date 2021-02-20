

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Relude_AsyncResult from "relude/src/Relude_AsyncResult.bs.js";
import * as API$ReasonmlReactApp from "./utils/API.bs.js";
import * as Spinner$ReasonmlReactApp from "./components/spinner/Spinner.bs.js";
import * as LeftSection$ReasonmlReactApp from "./layout/left-section/LeftSection.bs.js";
import * as RightSection$ReasonmlReactApp from "./layout/right-section/RightSection.bs.js";

require("./App.scss");

function App(Props) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setWeather = match[1];
  var weather = match[0];
  var match$1 = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setAir = match$1[1];
  var air = match$1[0];
  var match$2 = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setUvIndex = match$2[1];
  var uvIndex = match$2[0];
  var match$3 = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setForecast = match$3[1];
  var forecast = match$3[0];
  React.useEffect((function () {
          Curry._1(setWeather, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.weather("Bangkok").then(function (data) {
                return Promise.resolve(Curry._1(setWeather, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), []);
  React.useEffect((function () {
          Curry._1(setAir, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.air("Bangkok").then(function (data) {
                return Promise.resolve(Curry._1(setAir, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), []);
  React.useEffect((function () {
          Curry._1(setUvIndex, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.uvIndex("Bangkok").then(function (data) {
                return Promise.resolve(Curry._1(setUvIndex, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), []);
  React.useEffect((function () {
          Curry._1(setForecast, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.forecast("Bangkok").then(function (data) {
                return Promise.resolve(Curry._1(setForecast, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), []);
  var onInputChange = function ($$event) {
    console.log($$event);
    
  };
  var exit = 0;
  var exit$1 = 0;
  if (typeof weather === "number") {
    if (weather === /* Init */0) {
      return React.createElement(Spinner$ReasonmlReactApp.make, {});
    } else {
      return React.createElement(Spinner$ReasonmlReactApp.make, {});
    }
  }
  if (weather.TAG === /* Reloading */0) {
    exit$1 = 2;
  } else {
    var weatherData = weather._0;
    if (weatherData.TAG === /* Ok */0 && !(typeof air === "number" || air.TAG !== /* Complete */1)) {
      var airData = air._0;
      var weatherData$1 = weatherData._0;
      if (airData.TAG === /* Ok */0 && !(typeof uvIndex === "number" || uvIndex.TAG !== /* Complete */1)) {
        var uvIndex$1 = uvIndex._0;
        if (uvIndex$1.TAG === /* Ok */0 && typeof forecast !== "number") {
          if (forecast.TAG === /* Reloading */0) {
            return React.createElement("div", undefined);
          }
          var forecast$1 = forecast._0;
          if (forecast$1.TAG === /* Ok */0) {
            return React.createElement("div", {
                        className: "body"
                      }, React.createElement("div", {
                            className: "container-fluid h-100"
                          }, React.createElement("div", {
                                className: "row h-100"
                              }, React.createElement("div", {
                                    className: "left-section"
                                  }, React.createElement(LeftSection$ReasonmlReactApp.make, {
                                        weatherData: weatherData$1,
                                        onInputChange: onInputChange
                                      })), React.createElement("div", {
                                    className: "right-section"
                                  }, React.createElement(RightSection$ReasonmlReactApp.make, {
                                        weatherData: weatherData$1,
                                        airData: airData._0,
                                        uvIndex: uvIndex$1._0,
                                        forecast: forecast$1._0
                                      })))));
          }
          exit = 1;
        } else {
          exit$1 = 2;
        }
      } else {
        exit$1 = 2;
      }
    } else {
      exit$1 = 2;
    }
  }
  if (exit$1 === 2) {
    if (typeof air === "number") {
      return React.createElement(Spinner$ReasonmlReactApp.make, {});
    }
    if (typeof uvIndex === "number") {
      return React.createElement(Spinner$ReasonmlReactApp.make, {});
    }
    if (typeof forecast === "number") {
      return React.createElement(Spinner$ReasonmlReactApp.make, {});
    }
    if (typeof weather !== "number") {
      if (weather.TAG === /* Reloading */0) {
        exit = 1;
      } else {
        if (weather._0.TAG !== /* Ok */0) {
          return React.createElement("span", undefined, "Error occured. Please try again");
        }
        exit = 1;
      }
    }
    
  }
  if (exit === 1) {
    var exit$2 = 0;
    if (typeof air !== "number") {
      if (air.TAG === /* Reloading */0) {
        exit$2 = 2;
      } else {
        if (air._0.TAG !== /* Ok */0) {
          return React.createElement("span", undefined, "Error occured. Please try again");
        }
        exit$2 = 2;
      }
    }
    if (exit$2 === 2) {
      var exit$3 = 0;
      if (typeof uvIndex !== "number") {
        if (uvIndex.TAG === /* Reloading */0) {
          exit$3 = 3;
        } else {
          if (uvIndex._0.TAG !== /* Ok */0) {
            return React.createElement("span", undefined, "3");
          }
          exit$3 = 3;
        }
      }
      if (exit$3 === 3 && typeof forecast !== "number") {
        if (forecast.TAG === /* Reloading */0 || forecast._0.TAG === /* Ok */0) {
          return React.createElement("div", undefined);
        } else {
          return React.createElement("span", undefined, "Error occured. Please try again");
        }
      }
      
    }
    
  }
  
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
