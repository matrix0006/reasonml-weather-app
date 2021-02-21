

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Relude_AsyncResult from "relude/src/Relude_AsyncResult.bs.js";
import * as API$ReasonmlReactApp from "../utils/API.bs.js";

function useWeather(input) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setWeather = match[1];
  React.useEffect((function () {
          Curry._1(setWeather, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.weather(input).then(function (data) {
                return Promise.resolve(Curry._1(setWeather, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), [input]);
  return [
          match[0],
          setWeather
        ];
}

function useAir(input) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setAir = match[1];
  React.useEffect((function () {
          Curry._1(setAir, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.air(input).then(function (data) {
                return Promise.resolve(Curry._1(setAir, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), [input]);
  return [
          match[0],
          setAir
        ];
}

function useUvIndex(input) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setUvIndex = match[1];
  React.useEffect((function () {
          Curry._1(setUvIndex, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.uvIndex(input).then(function (data) {
                return Promise.resolve(Curry._1(setUvIndex, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), [input]);
  return [
          match[0],
          setUvIndex
        ];
}

function useForecast(input) {
  var match = React.useState(function () {
        return Relude_AsyncResult.init;
      });
  var setForecast = match[1];
  React.useEffect((function () {
          Curry._1(setForecast, Relude_AsyncResult.toBusy);
          API$ReasonmlReactApp.forecast(input).then(function (data) {
                return Promise.resolve(Curry._1(setForecast, (function (_prev) {
                                  if (data.TAG === /* Ok */0) {
                                    return Relude_AsyncResult.completeOk(data._0);
                                  } else {
                                    return Relude_AsyncResult.completeError(data._0);
                                  }
                                })));
              });
          
        }), [input]);
  return [
          match[0],
          setForecast
        ];
}

export {
  useWeather ,
  useAir ,
  useUvIndex ,
  useForecast ,
  
}
/* react Not a pure module */
