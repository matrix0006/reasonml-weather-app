

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as UVIndex$ReasonmlReactApp from "../../components/uv-index/UVIndex.bs.js";
import * as Humidity$ReasonmlReactApp from "../../components/humidity/Humidity.bs.js";
import * as Visibility$ReasonmlReactApp from "../../components/visibility/Visibility.bs.js";
import * as WindStatus$ReasonmlReactApp from "../../components/wind-status/WindStatus.bs.js";
import * as SunriseSunset$ReasonmlReactApp from "../../components/sunrise-sunset/SunriseSunset.bs.js";

require("./RightSectionStyle.scss");

var items = [
  {
    day: "Sun",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Mon",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Tue",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Wed",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Thu",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Fri",
    iconUrl: "a",
    temp: "b"
  },
  {
    day: "Sat",
    iconUrl: "a",
    temp: "b"
  }
];

function RightSection(Props) {
  var weatherData = Props.weatherData;
  React.useEffect((function () {
          console.log("new props received", weatherData);
          
        }), [weatherData]);
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col py-3 px-5"
                }, React.createElement("div", {
                      className: "row"
                    }, Belt_Array.mapWithIndex(items, (function (index, item) {
                            return React.createElement("div", {
                                        key: String(index),
                                        className: "col"
                                      });
                          }))), React.createElement("h4", undefined, "Today's highlights"), React.createElement("div", {
                      className: "row row-cols-1 row-cols-md-3 g-4"
                    }, React.createElement("div", {
                          className: "col"
                        }, React.createElement(UVIndex$ReasonmlReactApp.make, {})), React.createElement("div", {
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
                            })))));
}

var make = RightSection;

export {
  items ,
  make ,
  
}
/*  Not a pure module */
